import { useState } from "react";
import { toast } from "sonner";
import EmptyState from "../../../../components/ui/EmptyState";
import CategoryFormModal from "../components/CategoryFormModal";
import { useAdminCategories } from "../hooks/useAdminCategories";
import type { Category } from "../types/category";
import PageHeader from "../../../../components/ui/PageHeader";
import CategoriesTable from "../components/CategoriesTable";
import Pagination from "../../../../components/ui/Pagination";
import DataTableFilters from "../../../../components/ui/DataTableFilters";
import { useDeleteCategory } from "../hooks/useDeleteCategory";
import ConfirmDialog from "../../../../components/ui/ConfirmDialog";
import Button from "../../../../components/ui/Button";
import { Plus } from "lucide-react";

export default function AdminCategoriesPage() {
  const { data: categories = [], isLoading, isError } = useAdminCategories();

  const [editingCategory, setEditingCategory] = useState<Category | null>(null);

  const [deletingCategory, setDeletingCategory] = useState<Category | null>(
    null,
  );

  const deleteMutation = useDeleteCategory();
  const [formOpen, setFormOpen] = useState(false);

  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 10;

  if (isLoading) {
    return <p className="text-slate-500">Loading categories...</p>;
  }

  if (isError) {
    return <p className="text-red-500">Failed to load categories.</p>;
  }

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(search.toLowerCase()),
  );

  function handleDelete() {
    if (!deletingCategory) return;

    deleteMutation.mutate(deletingCategory.id, {
      onSuccess: () => {
        toast.success("Category deleted successfully");

        setDeletingCategory(null);
      },

      onError: () => {
        toast.error("Failed to delete category");
      },
    });
  }

  const totalPages = Math.ceil(filteredCategories.length / pageSize);

  const paginatedCategories = filteredCategories.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

  return (
    <div>
      <PageHeader
        title="Categories"
        description="Manage your store categories."
        action={
          <Button
            onClick={() => {
              setEditingCategory(null);
              setFormOpen(true);
            }}
          >
            <Plus size={18} />
            Add Category
          </Button>
        }
      />

      <DataTableFilters
        search={search}
        onSearchChange={(value: string) => {
          setSearch(value);
          setCurrentPage(1);
        }}
        placeholder="Search categories..."
      />

      {paginatedCategories.length > 0 ? (
        <CategoriesTable
          categories={paginatedCategories}

          onEdit={(category) => {
            setEditingCategory(category);
            setFormOpen(true);
          }}

          onDelete={(category) => {
            setDeletingCategory(category);
          }}
        />
      ) : (
        <EmptyState
          title="No categories found"
          description="No categories available."
        />
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      <CategoryFormModal
        key={editingCategory?.id ?? "new"}
        category={editingCategory}
        open={formOpen}
        onClose={() => {
          setFormOpen(false);
          setEditingCategory(null);
        }}
      />

      <ConfirmDialog
        open={!!deletingCategory}
        title="Delete Category"
        description={`Are you sure you want to delete "${deletingCategory?.name}"?`}
        variant="danger"
        confirmText="Delete"
        cancelText="Cancel"
        loading={deleteMutation.isPending}
        onOpenChange={(open) => {
          if (!open) {
            setDeletingCategory(null);
          }
        }}
        onConfirm={handleDelete}
      />
    </div>
  );
}
