import { useState } from "react";
import { toast } from "sonner";

import Button from "../../../../components/ui/Button";
import Input from "../../../../components/ui/Input";

import type { Category } from "../types/category";

import { useCreateCategory } from "../hooks/useCreateCategory";
import { useUpdateCategory } from "../hooks/useUpdateCategory";

interface Props {
  category: Category | null;

  open: boolean;

  onClose: () => void;
}

export default function CategoryFormModal({ category, open, onClose }: Props) {
  const createMutation = useCreateCategory();

  const updateMutation = useUpdateCategory();

  const [form, setForm] = useState({
    name: category?.name ?? "",
    description: category?.description ?? "",
  });

  if (!open) return null;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!form.name.trim()) {
      toast.error("Category name is required");

      return;
    }

    if (category) {
      updateMutation.mutate(
        {
          id: category.id,

          data: form,
        },

        {
          onSuccess: () => {
            toast.success("Category updated successfully");

            onClose();
          },

          onError: () => {
            toast.error("Failed to update category");
          },
        },
      );
    } else {
      createMutation.mutate(
        form,

        {
          onSuccess: () => {
            toast.success("Category created successfully");

            onClose();
          },

          onError: () => {
            toast.error("Failed to create category");
          },
        },
      );
    }
  }

  const loading = createMutation.isPending || updateMutation.isPending;

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/40
        backdrop-blur-sm
      "
    >
      <form
        onSubmit={handleSubmit}
        className="
          w-full
          max-w-xl
          rounded-3xl
          bg-white
          p-8
          shadow-xl
        "
      >
        <h2 className="mb-6 text-2xl font-bold">
          {category ? "Update Category" : "Add Category"}
        </h2>

        <div className="grid gap-5">
          <Input
            label="Name"

            name="name"

            value={form.name}

            onChange={handleChange}

            placeholder="Category name"
          />

          <Input
            label="Description"

            name="description"

            value={form.description}

            onChange={handleChange}

            placeholder="Category description"
          />
        </div>

        <div className="mt-8 flex justify-end gap-3">
          <Button type="button" variant="secondary" onClick={onClose}>
            Cancel
          </Button>

          <Button type="submit" disabled={loading}>
            {loading ? "Saving..." : "Save"}
          </Button>
        </div>
      </form>
    </div>
  );
}
