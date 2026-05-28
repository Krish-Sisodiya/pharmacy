import TopHeader from "../components/Header/TopHeader";
import Navbar from "../components/Header/Navbar";
import Hero from "../components/Hero/Hero";

import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products";

import About from "../components/About/About";
import Team from "../components/Team/Team";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

import WhatsAppButton from "../components/WhatsAppButton";

const Home = () => {
  return (
    <>
      <TopHeader />
      <Navbar />

      <Hero />
      <Categories />
      <Products />
      <About />
      <Team />
      <Contact />

      <Footer />

      <WhatsAppButton />
    </>
  );
};

export default Home;