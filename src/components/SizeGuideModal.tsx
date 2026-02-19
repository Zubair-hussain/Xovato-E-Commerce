import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Ruler } from "lucide-react";
import { Button } from "@/components/ui/button";

type Category = "hoodies" | "tees" | "pants" | "accessories";

const sizeData: Record<Category, { headers: string[]; rows: string[][] }> = {
  hoodies: {
    headers: ["Size", "Chest (in)", "Length (in)", "Sleeve (in)", "Shoulder (in)"],
    rows: [
      ["S", "42", "27", "24", "19"],
      ["M", "44", "28", "25", "20"],
      ["L", "46", "29", "26", "21"],
      ["XL", "48", "30", "27", "22"],
    ],
  },
  tees: {
    headers: ["Size", "Chest (in)", "Length (in)", "Sleeve (in)", "Shoulder (in)"],
    rows: [
      ["S", "40", "27", "9", "18"],
      ["M", "42", "28", "9.5", "19"],
      ["L", "44", "29", "10", "20"],
      ["XL", "46", "30", "10.5", "21"],
    ],
  },
  pants: {
    headers: ["Size", "Waist (in)", "Inseam (in)", "Hip (in)", "Thigh (in)"],
    rows: [
      ["S", "28-30", "31", "38", "23"],
      ["M", "30-32", "31.5", "40", "24"],
      ["L", "32-34", "32", "42", "25"],
      ["XL", "34-36", "32.5", "44", "26"],
    ],
  },
  accessories: {
    headers: ["Item", "Measurement"],
    rows: [
      ["Cap", "One Size — adjustable strap"],
      ["Beanie", "One Size — stretch fit"],
      ["Belt", "One Size — adjustable up to 44 in"],
      ["Bags", "One Size"],
    ],
  },
};

const SizeGuideModal = ({ category }: { category: Category }) => {
  const data = sizeData[category];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="h-auto p-0 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground gap-1">
          <Ruler className="h-3.5 w-3.5" />
          Size Guide
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg rounded-none">
        <DialogHeader>
          <DialogTitle className="font-heading text-lg font-bold tracking-tight capitalize">
            {category} Size Guide
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                {data.headers.map((h) => (
                  <th key={h} className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.rows.map((row, i) => (
                <tr key={i} className="border-b border-border/50 last:border-0">
                  {row.map((cell, j) => (
                    <td key={j} className={`px-3 py-2.5 ${j === 0 ? "font-medium" : "text-muted-foreground"}`}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          All garments are designed with an oversized, relaxed fit. When in doubt, size down for a more fitted look.
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default SizeGuideModal;
