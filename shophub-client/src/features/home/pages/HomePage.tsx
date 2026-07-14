import Hero from "../components/Hero";
import FeaturesSection from "../components/FeaturesSection";
import FeaturedProducts from "../components/FeaturedProducts";
import CategoriesSection from "../components/CategoriesSection";
import Newsletter from "../components/Newsletter";

function HomePage() {
  return (
    <>
      <Hero />

      <FeaturesSection />

      <FeaturedProducts />

      <CategoriesSection />

      <Newsletter />
    </>
  );
}

export default HomePage;
