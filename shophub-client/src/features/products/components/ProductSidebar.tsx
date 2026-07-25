import { useCategories } from "../../../hooks/useCategories";
import Button from "../../../components/ui/Button";

interface ProductSidebarProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}
function ProductSidebar({
  selectedCategory,
  onCategoryChange,
}: ProductSidebarProps) {
  const { data: categories, isLoading } = useCategories();

  return (
    <aside className="rounded-2xl border border-slate-200 bg-white p-6">
      <h2 className="mb-5 text-lg font-semibold text-slate-900">Categories</h2>

      {isLoading ? (
        <p className="text-slate-500">Loading...</p>
      ) : (
        <ul className="space-y-3">
          <li>
            <Button
              variant={selectedCategory === "" ? "primary" : "ghost"}
              className="w-full justify-start"
              onClick={() => onCategoryChange("")}
            >
              All Products
            </Button>
          </li>

          {categories?.map((category) => (
            <li key={category.id}>
              <Button
                variant={
                  selectedCategory === category.name ? "primary" : "ghost"
                }
                className="w-full justify-start"
                onClick={() => onCategoryChange(category.name)}
              >
                {category.name}
              </Button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}
export default ProductSidebar;
