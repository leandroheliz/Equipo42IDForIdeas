import SliderHome from "../Common/SliderHome";
import CardHome from "../Common/CardHome";
import BannerFooter from "../Common/BannerFooter";
import BannerHome from "../Common/BannerHome";
import BannerHome2 from "../Common/BannerHome2";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <SliderHome />
      <CardHome />
      <BannerHome />
      <BannerHome2 />
      <BannerFooter />
      <Footer />
    </>
  );
};

export default Home;
