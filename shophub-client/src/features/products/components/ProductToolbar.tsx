import { Search } from "lucide-react";
import Button from "../../../components/ui/Button";
interface ProductToolbarProps {
  search: string;
  onSearchChange: (value: string) => void;

  sortBy: string;
  onSortChange: (value: string) => void;

  onClearFilters: () => void;
}
function ProductToolbar({
  search,
  onSearchChange,
  sortBy,
  onSortChange,
  onClearFilters,
}: ProductToolbarProps) {
  return (
    <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Products</h1>

        <p className="mt-1 text-slate-500">Discover our latest products.</p>
      </div>

      <div className="relative w-full md:w-80">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          autoFocus
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search products..."
          className="w-full rounded-xl border border-slate-300 py-3 pl-10 pr-4 outline-none transition focus:border-blue-500"
        />
      </div>
      <select
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
        className="rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500"
      >
        <option value="">Default</option>
        <option value="name-asc">Name (A-Z)</option>
        <option value="name-desc">Name (Z-A)</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
      </select>
      <Button variant="outline" onClick={onClearFilters}>
        Clear Filters
      </Button>
    </div>
  );
}

export default ProductToolbar;
