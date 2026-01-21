import Hero from "../components/ui/Hero";
import Trending from "../components/ui/Trending";
import Services from "../components/ui/Services";
import BestSeller from "../components/ui/BestSeller";
import TopCategories from "../components/ui/TopCategories";
import TopRated from "../components/ui/TopRated";
import FeatureBook from "../components/ui/FeatureBook";
import FlashSale from "../components/ui/FlashSale";

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
    </>
  );
};

export default Home;