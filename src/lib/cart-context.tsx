import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import {
  addLine,
  cartCount,
  cartTotal,
  emptyCart,
  loadCart,
  saveCart,
  setLineQty,
  type CartLine,
} from "@/lib/cart";

type CartContextValue = {
  lines: CartLine[];
  ready: boolean;
  count: number;
  total: number;
  add: (id: string, qty?: number) => void;
  setQty: (id: string, qty: number) => void;
  remove: (id: string) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>(emptyCart);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setLines(loadCart());
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) saveCart(lines);
  }, [lines, ready]);

  const value = useMemo<CartContextValue>(
    () => ({
      lines,
      ready,
      count: cartCount(lines),
      total: cartTotal(lines),
      add: (id, qty = 1) => setLines((current) => addLine(current, id, qty)),
      setQty: (id, qty) => setLines((current) => setLineQty(current, id, qty)),
      remove: (id) => setLines((current) => current.filter((line) => line.id !== id)),
      clear: () => setLines(emptyCart()),
    }),
    [lines, ready],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
