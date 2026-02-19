import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "@/data/products";
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { formatPrice } from "@/lib/format";

interface SearchModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SearchModal = ({ open, onOpenChange }: SearchModalProps) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, onOpenChange]);

  const select = (productId: string) => {
    onOpenChange(false);
    navigate(`/product/${productId}`);
  };

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Search products..." value={search} onValueChange={setSearch} />
      <CommandList>
        <CommandEmpty>No products found.</CommandEmpty>
        <CommandGroup heading="Products">
          {products
            .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
            .map((p) => (
              <CommandItem key={p.id} value={p.name} onSelect={() => select(p.id)}>
                <img src={p.image} alt={p.name} className="mr-3 h-8 w-8 rounded object-cover" />
                <div className="flex flex-col">
                  <span className="text-sm font-medium">{p.name}</span>
                  <span className="text-xs text-muted-foreground">{formatPrice(p.price)}</span>
                </div>
              </CommandItem>
            ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};

export default SearchModal;
