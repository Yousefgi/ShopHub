import { Laptop, Shirt, House, BookOpen } from "lucide-react";
import CategorySkeleton from "./CategorySkeleton";
import Container from "../ui/Container";
import CategoryCard from "./CategoryCard";
import ErrorState from "../ui/ErrorState";
import EmptyState from "../ui/EmptyState";
import { useCategories } from "../../hooks/useCategories";

const icons = [
  <Laptop size={30} />,
  <Shirt size={30} />,
  <House size={30} />,
  <BookOpen size={30} />,
];

function CategoriesSection() {
  const { data: categories, isLoading, isError, refetch } = useCategories();

  if (isLoading) {
    return (
      <section className="py-24">
        <Container>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <CategorySkeleton key={index} />
            ))}
          </div>
        </Container>
      </section>
    );
  }
  if (categories.length === 0) {
    return (
      <section className="py-24">
        <Container>
          <EmptyState
            title="No Categories Found"
            description="Categories will appear here once they are added."
          />
        </Container>
      </section>
    );
  }
  if (isError || !categories) {
    return (
      <section className="py-24">
        <Container>
          <ErrorState
            description="Unable to load categories."
            onRetry={() => refetch()}
          />
        </Container>
      </section>
    );
  }

  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Browse Categories
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Explore products by category.
          </p>
        </div>

        <div className="grid gap-8 grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <CategoryCard
              key={category.id}
              title={category.name}
              slug={category.name.toLowerCase()}
              icon={icons[index % icons.length]}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default CategoriesSection;
