import { MENU, type MenuItem } from "@/lib/site";

export const CART_KEY = "hb-cart";
export const ORDERS_KEY = "hb-orders";
export const MAX_QTY = 20;

export type CartLine = {
  id: string;
  qty: number;
};

export type PlacedOrder = {
  id: string;
  createdAt: string;
  name: string;
  phone: string;
  email: string;
  note: string;
  pickup: string;
  lines: Array<{
    id: string;
    name: string;
    qty: number;
    price: number;
  }>;
  total: number;
};

export function allMenuItems(): MenuItem[] {
  return MENU.flatMap((section) => section.items);
}

export function findMenuItem(id: string): MenuItem | undefined {
  return allMenuItems().find((item) => item.id === id);
}

export function emptyCart(): CartLine[] {
  return [];
}

export function loadCart(): CartLine[] {
  if (typeof window === "undefined") return emptyCart();
  try {
    const raw = localStorage.getItem(CART_KEY);
    if (!raw) return emptyCart();
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return emptyCart();
    return parsed
      .map((row) => {
        if (!row || typeof row !== "object") return null;
        const id = String((row as CartLine).id ?? "");
        const qty = Number((row as CartLine).qty);
        if (!id || !findMenuItem(id) || !Number.isFinite(qty) || qty < 1) return null;
        return { id, qty: Math.min(MAX_QTY, Math.floor(qty)) };
      })
      .filter((row): row is CartLine => Boolean(row));
  } catch {
    return emptyCart();
  }
}

export function saveCart(lines: CartLine[]) {
  localStorage.setItem(CART_KEY, JSON.stringify(lines));
}

export function cartCount(lines: CartLine[]) {
  return lines.reduce((sum, line) => sum + line.qty, 0);
}

export function cartTotal(lines: CartLine[]) {
  return lines.reduce((sum, line) => {
    const item = findMenuItem(line.id);
    return sum + (item ? item.price * line.qty : 0);
  }, 0);
}

export function addLine(lines: CartLine[], id: string, qty: number): CartLine[] {
  const nextQty = Math.min(MAX_QTY, Math.max(1, Math.floor(qty)));
  const existing = lines.find((line) => line.id === id);
  if (existing) {
    return lines.map((line) =>
      line.id === id ? { ...line, qty: Math.min(MAX_QTY, line.qty + nextQty) } : line,
    );
  }
  return [...lines, { id, qty: nextQty }];
}

export function setLineQty(lines: CartLine[], id: string, qty: number): CartLine[] {
  if (qty < 1) return lines.filter((line) => line.id !== id);
  return lines.map((line) =>
    line.id === id ? { ...line, qty: Math.min(MAX_QTY, Math.floor(qty)) } : line,
  );
}

export function mixWarning(lines: CartLine[]): string | null {
  const diets = new Set(
    lines.map((line) => findMenuItem(line.id)?.dietary).filter(Boolean),
  );
  if (diets.has("meat") && diets.has("vegetarian")) {
    return "This bag mixes meat and vegetarian (may include dairy). The kitchen plates them separately.";
  }
  return null;
}

export function makeOrderId() {
  const n = Math.floor(1000 + Math.random() * 9000);
  return `HB-${n}`;
}

export function saveOrder(order: PlacedOrder) {
  const existing = loadOrders();
  existing.unshift(order);
  localStorage.setItem(ORDERS_KEY, JSON.stringify(existing.slice(0, 20)));
}

export function loadOrders(): PlacedOrder[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(ORDERS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed) ? (parsed as PlacedOrder[]) : [];
  } catch {
    return [];
  }
}
