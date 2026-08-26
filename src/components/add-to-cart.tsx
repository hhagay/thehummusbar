import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button, buttonVariants } from "@/components/ui/button";
import { QuantityStepper } from "@/components/quantity-stepper";
import { useCart } from "@/lib/cart-context";
import type { MenuItem } from "@/lib/site";
import { cn } from "@/lib/utils";

export function AddToCart({ item }: { item: MenuItem }) {
  const { add } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  function onAdd() {
    add(item.id, qty);
    setAdded(true);
    setQty(1);
  }

  if (added) {
    return (
      <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center">
        <p className="text-sm text-lime">Added to cart</p>
        <div className="flex gap-2">
          <Link to="/cart" className={cn(buttonVariants({ size: "sm" }))}>
            View cart
          </Link>
          <Button type="button" variant="outline" size="sm" onClick={() => setAdded(false)}>
            Add more
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-4 flex flex-wrap items-center gap-2">
      <QuantityStepper value={qty} onChange={setQty} />
      <Button type="button" size="sm" onClick={onAdd}>
        Add to cart
      </Button>
    </div>
  );
}
