import Container from "../../../components/ui/Container";
import { useParams } from "react-router-dom";
import { useProduct } from "../../../hooks/useProduct";
import ProductGallery from "../components/details/ProductGallery";
import ProductInfo from "../components/details/ProductInfo";
import RelatedProducts from "../components/details/RelatedProducts";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
function ProductDetailsPage() {
  const { id } = useParams();

  const { data: product, isLoading, isError } = useProduct(Number(id));

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError || !product) {
    return <p>Product not found.</p>;
  }

  return (
    <section className="py-10">
      <Container>
        <nav className="mb-3 flex items-center text-sm text-slate-500">
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>

          <ChevronRight size={16} className="mx-2" />

          <Link to="/products" className="hover:text-blue-600">
            Products
          </Link>

          <ChevronRight size={16} className="mx-2" />

          <span className="font-medium text-slate-900">{product.name}</span>
        </nav>
        <Link
          to="/products"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-blue-600"
        >
          <ArrowLeft size={18} />
          Back to Products
        </Link>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <ProductGallery imageUrl={product.imageUrl} name={product.name} />

          <ProductInfo product={product} />
        </div>
        <RelatedProducts
          category={product.categoryName}
          currentProductId={product.id}
        />
      </Container>
    </section>
  );
}

export default ProductDetailsPage;
