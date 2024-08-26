import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import OtherHero from "../OtherHero/OtherHero";
import BlogHero from "../../assets/OtherHeros/ServicesHero.jpg"
import MainBlog from "../MainBlog/Blogs"


const Blog = () => {
    const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
    return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar handleOrderPopup={handleOrderPopup} />
      <OtherHero
        HeroImg={BlogHero}
        title="Blogs"
      />
      <MainBlog />
      <Footer />
    </div>
  );
};

export default Blog;