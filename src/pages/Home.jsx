import Hero from "../components/ui/Hero";
import Trending from "../components/ui/Trending";
import Services from "../components/ui/Services";
import BestSeller from "../components/ui/BestSeller";
import TopCategories from "../components/ui/TopCategories";
import TopRated from "../components/ui/TopRated";
import FeatureBook from "../components/ui/FeatureBook";
import FlashSale from "../components/ui/FlashSale";
import Blogs from "../components/ui/Blogs";
import Testimonial from "../components/ui/Testimonial";
import Stats from '../components/ui/Stats';
import Footer from "../components/ui/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Trending />
      <Services />
      <BestSeller />
      <TopCategories />
      <TopRated />
      <FeatureBook />
      <FlashSale />
      <Blogs />
      <Testimonial />
      <Stats />
      <Footer />
    </>
  );
};

export default Home;