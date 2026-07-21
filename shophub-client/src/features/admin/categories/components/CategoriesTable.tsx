import type { Category } from "../types/category";

import CategoryRow from "./CategoryRow";

interface Props {
  categories: Category[];

  onEdit: (category: Category) => void;

  onDelete: (category: Category) => void;
}

export default function CategoriesTable({
  categories,
  onEdit,
  onDelete,
}: Props) {
  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
      <table className="w-full">
        <thead className="bg-slate-50">
          <tr className="text-left">
            <th className="px-6 py-4">ID</th>

            <th className="px-6 py-4">Name</th>

            <th className="px-6 py-4">Description</th>

            <th className="px-6 py-4">Products</th>

            <th className="px-6 py-4 text-right">Actions</th>
          </tr>
        </thead>

        <tbody>
          {categories.map((category) => (
            <CategoryRow
              key={category.id}
              category={category}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
