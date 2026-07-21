import { Trash2, Edit } from "lucide-react";
import type { Product } from "../../../../types/product";
import Button from "../../../../components/ui/Button";
import Card from "../../../../components/ui/Card";
import { useDeleteProduct } from "../hooks/useAdminProducts";

import { useProducts } from "../../../../hooks/useProducts";
import { useState } from "react";
import ProductFormModal from "../components/ProductFormModal";
import ConfirmDialog from "../../../../components/ui/ConfirmDialog";
export default function AdminProductsPage() {
  const { data, isLoading } = useProducts();
  const deleteMutation = useDeleteProduct();
  const [open, setOpen] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [deleteProductId, setDeleteProductId] = useState<number | null>(null);
  if (isLoading) {
    return <p>Loading products...</p>;
  }

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Products</h1>

          <p className="mt-2 text-slate-500">Manage your store products.</p>
        </div>

        <Button
          onClick={() => {
            setSelectedProduct(null);
            setOpen(true);
          }}
        >
          Add Product
        </Button>
      </div>

      <Card className="overflow-hidden">
        <table className="w-full">
          <thead className="border-b bg-slate-50">
            <tr>
              <th className="p-4 text-left">Name</th>

              <th className="p-4 text-left">Category</th>

              <th className="p-4 text-left">Price</th>

              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {data?.items.map((product) => (
              <tr key={product.id} className="border-b">
                <td className="p-4 font-medium">{product.name}</td>

                <td className="p-4">{product.categoryName}</td>

                <td className="p-4">${product.finalPrice}</td>

                <td className="flex gap-2 p-4">
                  <Button
                    variant="secondary"
                    onClick={() => {
                      setSelectedProduct(product);
                      setOpen(true);
                    }}
                  >
                    <Edit size={18} />
                  </Button>

                  <Button
                    variant="danger"
                    onClick={() => {
                      setDeleteProductId(product.id);
                    }}
                  >
                    <Trash2 size={18} />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
      {open && (
        <ProductFormModal
          key={selectedProduct?.id ?? "new"}
          product={selectedProduct}
          onClose={() => setOpen(false)}
        />
      )}
      {deleteProductId && (
        <ConfirmDialog
          open={deleteProductId !== null}
          title="Delete Product"
          description="Are you sure you want to delete this product?"
          variant="danger"
          confirmText="Delete"
          cancelText="Cancel"

          onOpenChange={(open) => {
            if (!open) {
              setDeleteProductId(null);
            }
          }}

          onConfirm={() => {
            deleteMutation.mutate(deleteProductId);

            setDeleteProductId(null);
          }}

          loading={deleteMutation.isPending}
        />
      )}
    </div>
  );
}
