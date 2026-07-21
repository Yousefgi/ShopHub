import { useState } from "react";
import { useCategories } from "../../../../hooks/useCategories";
import Button from "../../../../components/ui/Button";
import Input from "../../../../components/ui/Input";
import { toast } from "sonner";
import type { Product } from "../../../../types/product";
import { useCreateProduct, useUpdateProduct } from "../hooks/useAdminProducts";

interface Props {
  product: Product | null;
  onClose: () => void;
}

export default function ProductFormModal({ product, onClose }: Props) {
  const createMutation = useCreateProduct();
  const { data: categories } = useCategories();
  const updateMutation = useUpdateProduct();

  const emptyForm = {
    name: "",
    description: "",
    price: 0,
    discountPercentage: 0,
    stockQuantity: 0,
    brand: "",
    imageUrl: "",
    categoryId: 0,
  };

  const [form, setForm] = useState(() =>
    product
      ? {
          name: product.name,
          description: "",
          price: product.price,
          discountPercentage: product.discountPercentage,
          stockQuantity: product.stockQuantity,
          brand: product.brand,
          imageUrl: product.imageUrl ?? "",
          categoryId: product.categoryId,
        }
      : emptyForm,
  );

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,

      [name]:
        name === "price" ||
        name === "discountPercentage" ||
        name === "stockQuantity" ||
        name === "categoryId"
          ? Number(value)
          : value,
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const data = {
      ...form,
      imageUrl: form.imageUrl || undefined,
    };

    if (product) {
      updateMutation.mutate(
        {
          id: product.id,
          data,
        },

        {
          onSuccess: () => {
            toast.success("Product updated successfully");

            onClose();
          },

          onError: () => {
            toast.error("Failed to update product");
          },
        },
      );
    } else {
      createMutation.mutate(
        data,

        {
          onSuccess: () => {
            toast.success("Product created successfully");

            onClose();
          },

          onError: () => {
            toast.error("Failed to create product");
          },
        },
      );
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl rounded-3xl bg-white p-8 shadow-xl"
      >
        <h2 className="mb-6 text-2xl font-bold">
          {product ? "Edit Product" : "Add Product"}
        </h2>

        <div className="grid gap-4">
          <Input
            name="name"
            label="Name"
            value={form.name}
            onChange={handleChange}
          />

          <Input
            name="brand"
            label="Brand"
            value={form.brand}
            onChange={handleChange}
          />

          <Input
            name="price"
            label="Price"
            type="number"
            value={form.price}
            onChange={handleChange}
          />

          <Input
            name="discountPercentage"
            label="Discount %"
            type="number"
            value={form.discountPercentage}
            onChange={handleChange}
          />

          <Input
            name="stockQuantity"
            label="Stock"
            type="number"
            value={form.stockQuantity}
            onChange={handleChange}
          />

          <Input
            name="imageUrl"
            label="Image URL (optional)"
            placeholder="https://example.com/image.jpg"
            value={form.imageUrl}
            onChange={handleChange}
          />
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Category
            </label>

            <select
              name="categoryId"
              value={form.categoryId}
              onChange={(e) => {
                setForm((prev) => ({
                  ...prev,
                  categoryId: Number(e.target.value),
                }));
              }}
              className="
                w-full rounded-xl border border-slate-300
                px-4 py-3 outline-none
                focus:border-blue-500
                "
            >
              <option value={0}>Select Category</option>

              {categories?.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-8 flex justify-end gap-3">
          <Button type="button" variant="secondary" onClick={onClose}>
            Cancel
          </Button>

          <Button
            type="submit"
            disabled={createMutation.isPending || updateMutation.isPending}
          >
            {createMutation.isPending || updateMutation.isPending
              ? "Saving..."
              : "Save"}
          </Button>
        </div>
      </form>
    </div>
  );
}
