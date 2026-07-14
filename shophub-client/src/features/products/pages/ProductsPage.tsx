import { useState } from "react";

import Container from "../../../components/ui/Container";
import ProductToolbar from "../components/ProductToolbar";
import ProductGrid from "../components/ProductGrid";
import ProductSidebar from "../components/ProductSidebar";

import { useDebounce } from "../../../hooks/useDebounce";

function ProductsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const debouncedSearch = useDebounce(search);

  return (
    <section className="py-10">
      <Container>
        <ProductToolbar search={search} onSearchChange={setSearch} />

        <div className="grid gap-8 lg:grid-cols-4">
          <ProductSidebar
            selectedCategory={category}
            onCategoryChange={setCategory}
          />
          <div className="lg:col-span-3">
            <ProductGrid search={debouncedSearch} category={category} />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ProductsPage;
