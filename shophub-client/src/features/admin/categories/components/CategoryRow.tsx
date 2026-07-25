import { Pencil, Trash2 } from "lucide-react";

import Button from "../../../../components/ui/Button";

import type { Category } from "../types/category";

interface Props {
  category: Category;

  onEdit: (category: Category) => void;

  onDelete: (category: Category) => void;
}

export default function CategoryRow({ category, onEdit, onDelete }: Props) {
  return (
    <tr className="border-t transition-colors hover:bg-slate-50">
      {/* ID */}
      <td className="px-6 py-5 font-semibold text-slate-900">#{category.id}</td>

      {/* Name */}
      <td className="px-6 py-5">
        <div className="font-medium text-slate-900">{category.name}</div>
      </td>

      {/* Description */}
      <td className="px-6 py-5 text-slate-600">
        {category.description || "-"}
      </td>

      {/* Products Count */}
      <td className="px-6 py-5">
        <span
          className="
            rounded-full
            bg-blue-100
            px-3
            py-1
            text-sm
            font-medium
            text-blue-700
          "
        >
          {category.productsCount}
        </span>
      </td>

      {/* Actions */}
      <td className="px-6 py-5">
        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={() => onEdit(category)}>
            <Pencil size={16} />
            Edit
          </Button>

          <Button variant="outline" onClick={() => onDelete(category)}>
            <Trash2 size={16} />
            Delete
          </Button>
        </div>
      </td>
    </tr>
  );
}
