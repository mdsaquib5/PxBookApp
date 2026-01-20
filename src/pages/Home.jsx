import Hero from "../components/ui/Hero";
import Trending from "../components/ui/Trending";
import Services from "../components/ui/Services";
import BestSeller from "../components/ui/BestSeller";
import TopCategories from "../components/ui/TopCategories";

const Home = () => {
  return (
    <>
      <Hero />
      <Trending />
      <Services />
      <BestSeller />
      <TopCategories />
    </>
  );
};

export default Home;