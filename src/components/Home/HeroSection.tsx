import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import Cybersecurity from "../../assets/Home-page-images/Cybersecurity.jpg";
import Threat from "../../assets/Home-page-images/Threatt.jpg";
import Protection from "../../assets/Home-page-images/Protectionn.jpg";
import Network from "../../assets/Home-page-images/Networkk.jpg";
import Incident from "../../assets/Home-page-images/Incident.jpeg";
import IoT from "../../assets/Home-page-images/IoTt.jpg";

const carouselItems = [
  {
    subHeading: "Welcome to",
    heading: "Ekjal Cybersecurity",
    paragraph:
      "At Ekjal Cybersecurity, we're at the forefront of protecting critical water infrastructure from evolving cyber threats. Our innovative solutions combine advanced AI algorithms, robust encryption protocols, and real-time monitoring systems to ensure the integrity and safety of water management networks. With a team of expert cybersecurity professionals and cutting-edge technology, we provide comprehensive protection against potential vulnerabilities and unauthorized...",

    image: Cybersecurity,
  },
  {
    subHeading: "Threat Detection",
    heading: "AI-Powered Security",
    paragraph:
      "Leveraging artificial intelligence to detect and prevent cyber threats in water systems. Our state-of-the-art AI algorithms continuously analyze network traffic and system behaviors to identify potential security breaches. By utilizing machine learning and predictive analytics, we stay one step ahead of cybercriminals. Ekjal's AI-powered security provides round-the-clock protection, ensuring the safety and reliability of your water management infrastructure...",
    image: Threat,
  },
  {
    subHeading: "Data Protection",
    heading: "Secure Water Data",
    paragraph:
      "Implementing robust encryption and access controls to safeguard critical water infrastructure data. Our multi-layered approach ensures that sensitive information remains protected at all times. We employ state-of-the-art encryption protocols, secure authentication methods, and granular access controls to prevent unauthorized data breaches. With Ekjal, you can be confident that your water management data is shielded from both internal and external threats, data breaches.",
    image: Protection,
  },
  {
    subHeading: "Network Security",
    heading: "Fortified Infrastructure",
    paragraph:
      "Building resilient network architectures to protect water management systems from cyber attacks. Our team of experts designs and implements robust network infrastructures that can withstand sophisticated cyber threats. We utilize advanced firewalls, intrusion detection systems, and segmentation techniques to create multiple layers of defense. Our fortified infrastructure ensures the continuity and integrity of your water management operations even in the face...",
    image: Network,
  },
  {
    subHeading: "Incident Response",
    heading: "Rapid Recovery",
    paragraph:
      "Developing comprehensive incident response plans to ensure quick recovery from security breaches. Our rapid recovery solutions are designed to minimize downtime and data loss in the event of a cyber incident. We provide detailed playbooks, conduct regular drills, and offer 24/7 support to ensure your team is always prepared. With Ekjal's incident response strategies, you can swiftly contain threats and restore normal operations, safeguarding both your systems reputation.",
    image: Incident,
  },
  {
    subHeading: "IoT Security",
    heading: "Smart Device Protection",
    paragraph:
      "Securing Internet of Things (IoT) devices used in water management to prevent unauthorized access. As water systems become increasingly connected, we offer specialized protection for IoT sensors, controllers, and other smart devices. Our solutions include device authentication, secure firmware updates, and network isolation to mitigate risks associated with IoT integration. Trust Ekjal to secure your entire IoT ecosystem, from edge devices to cloud platforms.",
    image: IoT,
  },
];
function HeroSection() {
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
      className="flex items-center bg-white px-3 lg:px-20 pt-5"
    >
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="w-full bg-transparent"
      >
        <CarouselContent className="bg-transparent">
          {carouselItems.map((item, index) => (
            <CarouselItem
              key={index}
              className="flex flex-col md:flex-row items-center bg-transparent"
            >
              <motion.div
                variants={itemVariants}
                className="w-full md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0"
              >
                <motion.h3
                  variants={itemVariants}
                  className="lg:text-xl text-sm font-semibold text-muted-foreground mb-3"
                >
                  {item.subHeading}
                </motion.h3>
                <motion.h2
                  variants={itemVariants}
                  className="lg:text-4xl text-2xl md:text-6xl font-bold text-primary mb-6 leading-tight"
                >
                  {item.heading}
                </motion.h2>
                <motion.p
                  variants={itemVariants}
                  className="lg:text-lg text-sm text-muted-foreground mb-8 leading-relaxed"
                >
                  {item.paragraph}
                </motion.p>
                <motion.div variants={itemVariants}>
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground text-lg px-8 py-3 rounded-md shadow-lg hover:shadow-xl"
                  >
                    Learn More
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="w-full md:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] relative rounded-md overflow-hidden"
              >
                <img
                  src={item.image}
                  alt="Hero"
                  className="rounded-2xl w-full h-full object-contain aspect-video mix-blend-overlay opacity-90"
                />
                {/* Add an overlay gradient */}
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute right-16 bottom-8 flex space-x-4">
          <CarouselPrevious className="w-10 h-10 rounded-full bg-white/90 shadow-lg text-foreground hover:bg-primary hover:text-white transition-all duration-300 ease-in-out flex items-center justify-center" />
          <CarouselNext className="w-10 h-10 rounded-full bg-white/90 shadow-lg text-foreground hover:bg-primary hover:text-white transition-all duration-300 ease-in-out flex items-center justify-center" />
        </div>
      </Carousel>
    </motion.div>
  );
}

export default HeroSection;
