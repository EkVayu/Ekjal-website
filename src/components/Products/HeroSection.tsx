import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import hero from '@/assets/Products/hero.png';

const heroSectionData = {
  subtitle: "Cybersecurity Solutions",
  title: "Phishing Prevention Tool",
  description: "Our state-of-the-art Phishing Prevention Tool uses AI-based analytics to detect and actively prevent phishing attacks. Protect your enterprise from social engineering threats and data loss with our advanced solution.",
  buttonText: "Learn More",
  image: hero
};

const HeroSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="flex items-center bg-gradient-to-b lg:bg-gradient-to-r from-primary to-secondary p-2 lg:py-20 lg:h-[70vh] rounded-md"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div variants={itemVariants} className="w-full md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
            <motion.h3 variants={itemVariants} className="text-xl font-semibold text-secondary mb-3">
              {heroSectionData.subtitle}
            </motion.h3>
            <motion.h2 variants={itemVariants} className="lg:text-5xl text-2xl font-bold mb-6 leading-tight text-secondary">
              {heroSectionData.title}
            </motion.h2>
            <motion.p variants={itemVariants} className="lg:text-lg text-sm text-secondary mb-8 leading-relaxed">
              {heroSectionData.description}
            </motion.p>
            <motion.div variants={itemVariants}>
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-100 transition-colors duration-300 text-lg px-8 py-3 rounded-md shadow-lg hover:shadow-xl"
              >
                {heroSectionData.buttonText}
              </Button>
            </motion.div>
          </motion.div>
          <motion.div variants={itemVariants} className="w-full md:w-1/2 h-[400px] md:h-[480px] relative rounded-md overflow-hidden">
            <img
              src={heroSectionData.image}
              alt={heroSectionData.title}
              className="rounded-md w-full h-full object-contain object-center"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
