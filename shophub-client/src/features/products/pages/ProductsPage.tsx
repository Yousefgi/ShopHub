import { useState } from "react";

import Container from "../../../components/ui/Container";
import ProductToolbar from "../components/ProductToolbar";
import ProductGrid from "../components/ProductGrid";
import ProductSidebar from "../components/ProductSidebar";

import { useDebounce } from "../../../hooks/useDebounce";
import { getSortConfig } from "../../../utils/sort";

function ProductsPage() {
  const [filters, setFilters] = useState({
    search: "",
    category: "",
    sortBy: "",
  });

  const [page, setPage] = useState(1);

  const debouncedSearch = useDebounce(filters.search);

  const sortConfig = getSortConfig(filters.sortBy);

  const handleSearchChange = (value: string) => {
    setFilters((prev) => ({
      ...prev,
      search: value,
    }));

    setPage(1);
  };

  const handleCategoryChange = (value: string) => {
    setFilters((prev) => ({
      ...prev,
      category: value,
    }));

    setPage(1);
  };

  const handleSortChange = (value: string) => {
    setFilters((prev) => ({
      ...prev,
      sortBy: value,
    }));

    setPage(1);
  };

  const handleClearFilters = () => {
    setFilters({
      search: "",
      category: "",
      sortBy: "",
    });

    setPage(1);
  };

  return (
    <section className="py-10">
      <Container>
        <ProductToolbar
          search={filters.search}
          onSearchChange={handleSearchChange}
          sortBy={filters.sortBy}
          onSortChange={handleSortChange}
          onClearFilters={handleClearFilters}
        />

        <div className="grid gap-8 lg:grid-cols-4">
          <ProductSidebar
            selectedCategory={filters.category}
            onCategoryChange={handleCategoryChange}
          />

          <div className="lg:col-span-3">
            <ProductGrid
              search={debouncedSearch}
              category={filters.category}
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
