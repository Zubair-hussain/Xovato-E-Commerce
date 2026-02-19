import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import CategoriesSection from "@/components/CategoriesSection";
import NewDropCountdown from "@/components/NewDropCountdown";
import BrandManifesto from "@/components/BrandManifesto";
import BestSellers from "@/components/BestSellers";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import RecentlyViewed from "@/components/RecentlyViewed";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar transparent />
      <main>
        <HeroSection />
        <FeaturedProducts />
        <CategoriesSection />
        <NewDropCountdown />
        <BrandManifesto />
        <BestSellers />
        <RecentlyViewed />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
