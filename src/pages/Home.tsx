import { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

import TopHeader from "../components/Header/TopHeader";
import Navbar from "../components/Header/Navbar";
import Hero from "../components/Hero/Hero";
import Categories from "../components/Categories/Categories";
import About from "../components/About/About";
import Team from "../components/Team/Team";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import AnimatedBackground from "../components/AnimatedBackground";
import ScrollAnimationWrapper from "../components/ScrollAnimationWrapper";

const Home = () => {
  // SCROLL PROGRESS BAR
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // PAGE LOAD — smooth entry
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="relative">

      {/* FLOATING BUBBLE BG */}
      <AnimatedBackground />

      {/* SCROLL PROGRESS BAR */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-green-600 via-green-400 to-green-300 origin-left z-[9999] shadow-[0_0_10px_rgba(34,197,94,0.6)]"
      />

      {/* STICKY HEADER */}
      <div className="relative bg-transparent">
        <TopHeader />
        <Navbar />
      </div>

      {/* MAIN CONTENT */}
      {/* MAIN CONTENT */}
<main className="relative z-10 bg-white/60 backdrop-blur-[1px]">

        {/* HERO — fade in on load */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Hero />
        </motion.div>

        {/* CATEGORIES — slide up */}
        <ScrollAnimationWrapper direction="up" delay={0}>
          <Categories />
        </ScrollAnimationWrapper>

        {/* ABOUT — scale in */}
        <ScrollAnimationWrapper direction="scale" delay={0.05}>
          <About />
        </ScrollAnimationWrapper>

        {/* TEAM — slide from left */}
        <ScrollAnimationWrapper direction="left" delay={0.05}>
          <Team />
        </ScrollAnimationWrapper>

        {/* CONTACT — slide from right */}
        <ScrollAnimationWrapper direction="right" delay={0.05}>
          <Contact />
        </ScrollAnimationWrapper>

        {/* FOOTER — fade */}
        <ScrollAnimationWrapper direction="fade" delay={0}>
          <Footer />
        </ScrollAnimationWrapper>

      </main>

      {/* WHATSAPP */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
        className="relative z-50"
      >
        <WhatsAppButton />
      </motion.div>

    </div>
  );
};

export default Home;