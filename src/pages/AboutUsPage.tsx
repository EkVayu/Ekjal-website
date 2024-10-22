import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HeroSection from '@/components/AboutUs/HeroSection';
import IntroductionSection from '@/components/AboutUs/IntroductionSection';
import OurStorySection from '@/components/AboutUs/OurStorySection';
import AnimatedCardsSection from '@/components/AboutUs/AnimatedCardsSection';
import VisionMissionSection from '@/components/AboutUs/VisionMissionSection';
import ClientsSection from '@/components/AboutUs/ClientsSection';
import OurTeamsSection from '@/components/AboutUs/OurTeamsSection';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
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
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeInUp}
    >
      {children}
    </motion.div>
  );
};
const AboutUsPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <HeroSection />
      
      <AnimatedSection>
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <IntroductionSection />
        </div>
      </AnimatedSection>
      
      <AnimatedSection>
        <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
          <OurStorySection />
        </div>
      </AnimatedSection>
      
      <AnimatedSection>
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <AnimatedCardsSection />
        </div>
      </AnimatedSection>
      
      <AnimatedSection>
        <div className="bg-blue-50 py-16 px-4 sm:px-6 lg:px-8">
          <VisionMissionSection />
        </div>
      </AnimatedSection>
      
      <AnimatedSection>
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <ClientsSection />
        </div>
      </AnimatedSection>
      
      <AnimatedSection>
        <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
          <OurTeamsSection />
        </div>
      </AnimatedSection>
    </div>
  );
};

export default AboutUsPage;
