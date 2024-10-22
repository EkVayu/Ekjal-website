import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import heroImage from "@/assets/Products/man-sits-desk-with-laptop-monitor-showing-shield_624163-5544.avif";

const heroData = {
  backgroundImage: heroImage,
  title: "Empowering Digital Security",
  subtitle: "EkJal and EkVayu: Reshaping the Cybersecurity Landscape",
  buttonText: "Learn More",
};

const heroVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.8 } },
};

const HeroSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={heroVariants}
      className="relative h-[80vh] flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-800 text-white"
    >
      <div className="absolute inset-0">
        <img
          src={heroData.backgroundImage}
          alt="Cybersecurity Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      <div className="z-10 text-center px-4 max-w-4xl">
        <motion.h1
          variants={contentVariants}
          className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
        >
          {heroData.title}
        </motion.h1>
        <motion.p
          variants={contentVariants}
          className="text-xl md:text-2xl mb-8 leading-relaxed"
        >
          {heroData.subtitle}
        </motion.p>
        <motion.button
          variants={contentVariants}
          className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          {heroData.buttonText}
        </motion.button>
      </div>
    </motion.section>
  );
};

export default HeroSection;
