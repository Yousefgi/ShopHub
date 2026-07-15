import { useState } from "react";
import Container from "../../../components/ui/Container";
import ProductToolbar from "../components/ProductToolbar";
import ProductGrid from "../components/ProductGrid";
import ProductSidebar from "../components/ProductSidebar";
import { useDebounce } from "../../../hooks/useDebounce";

function ProductsPage() {
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("");
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("");
  const debouncedSearch = useDebounce(search);
  const sortConfig = (() => {
    switch (sortBy) {
      case "name-asc":
        return { sortBy: "name", desc: false };

      case "name-desc":
        return { sortBy: "name", desc: true };

      case "price-asc":
        return { sortBy: "price", desc: false };

      case "price-desc":
        return { sortBy: "price", desc: true };

      default:
        return {
          sortBy: "",
          desc: false,
        };
    }
  })();
  const handleSearchChange = (value: string) => {
    setSearch(value);
    setPage(1);
  };

  const handleBrandChange = (value: string) => {
    setBrand(value);
    setPage(1);
  };
  const handleSortChange = (value: string) => {
    setSortBy(value);
    setPage(1);
  };

  const handleClearFilters = () => {
    setSearch("");
    setBrand("");
    setSortBy("");
    setPage(1);
  };

  return (
    <section className="py-10">
      <Container>
        <ProductToolbar
          search={search}
          onSearchChange={handleSearchChange}
          sortBy={sortBy}
          onSortChange={handleSortChange}
          onClearFilters={handleClearFilters}
        />

        <div className="grid gap-8 lg:grid-cols-4">
          <ProductSidebar
            selectedBrand={brand}
            onBrandChange={handleBrandChange}
          />
          <div className="lg:col-span-3">
            <ProductGrid
              search={debouncedSearch}
              brand={brand}
              sortBy={sortConfig.sortBy}
              desc={sortConfig.desc}
              page={page}
              onPageChange={setPage}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ProductsPage;
