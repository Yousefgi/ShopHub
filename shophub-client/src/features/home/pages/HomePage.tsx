import Hero from "../components/Hero";
import FeaturesSection from "../components/FeaturesSection";
import FeaturedProducts from "../components/FeaturedProducts";
import CategoriesSection from "../components/CategoriesSection";
import Newsletter from "../components/Newsletter";
import TrustSection from "../components/TrustSection";
import ReviewsSection from "../components/ReviewsSection";

function HomePage() {
  return (
    <>
      <Hero />

      <TrustSection />

      <FeaturesSection />

      <FeaturedProducts />

      <CategoriesSection />

      <ReviewsSection />

      <Newsletter />
    </>
  );
}

export default HomePage;
