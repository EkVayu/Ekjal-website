import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import img1 from "../../assets/services/insurance_3577279.png";
import img2 from "../../assets/services/cyber-security_10429930.png";
import img3 from "../../assets/services/safety-car_6747875.png";
import img4 from "../../assets/services/public-domain_5047631.png";
import img5 from "../../assets/services/recovery_7394483.png";
import img6 from "../../assets/services/usb_12538296.png";
import img7 from '../../assets/Home-page-images/img4.png'
import img8 from '../../assets/Home-page-images/img8.png'
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: img7, // You'll need to import appropriate icons for these new services
    title: "Phishing Prevention Tool",
    link: "/phishing-prevention-tool",
    description: [
      {
        text: "Real-time Email Scanning: Detect and block phishing attempts instantly.",
      },
      {
        text: "User Education: Interactive training modules for phishing awareness.",
      },
    ],
  },
  {
    icon: img8, // You'll need to import appropriate icons for these new services
    title: "Decision Support System",
    link: "/decission-support-system",
    description: [
      {
        text: "Risk Analysis: Data-driven security decision making framework.",
      },
      {
        text: "Automated Recommendations: AI-powered security measure suggestions.",
      },
    ],
  },

  {
    icon: img1,
    title: "Enterprise Security",
    link: "/enterprise-security",
    description: [
      {
        text: "Security Architecture: Design secure, resilient network systems.",
      },
      {
        text: "Identity Management: Control user access and privileges.",
      },
    ],
  },
  {
    icon: img2,
    title: "Automotive Cyber Security",
    link: "/automotive-cyber-security",
    description: [
      {
        text: "In-Vehicle Security: Protect vehicle communication systems.",
      },
      {
        text: "Over-the-Air Updates: Securely update vehicle software remotely.",
      },
    ],
  },
  {
    icon: img3,
    title: "Virtual CISO",
    link: "/virtual-ciso",
    description: [
      {
        text: "Risk Management: Assess and mitigate security risks.",
      },
      {
        text: "Compliance Management: Ensure adherence to cybersecurity regulations.",
      },
    ],
  },
  {
    icon: img4,
    title: "ISO-Certified Cybersecurity Solutions",
    link: "",
    description: [
      {
        text: "Compliance Audits: Validate adherence to ISO cybersecurity standards.",
      },
      {
        text: "Certification Assistance: Guide through ISO certification processes.",
      },
    ],
  },
  {
    icon: img5,
    title: "Cyber Threat Protection",
    link: "",
    description: [
      {
        text: "Threat Detection: Identify and respond to cyber threats.",
      },
      {
        text: "Incident Response: Manage and recover from security breaches.",
      },
    ],
  },
  {
    icon: img6,
    title: "VAPT Services",
    link: "/vapt-services",
    description: [
      {
        text: "Vulnerability Assessment: Identify system vulnerabilities.",
      },
      {
        text: "Penetration Testing: Simulate attacks to evaluate security defenses.",
      },
    ],
  },
];

function ServicesSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };
  return (
    <section className="bg-background lg:py-16 py-5 px-3 lg:px-20">
      <div className="container mx-auto">
        <h2 className="lg:text-4xl text-xl font-bold text-center mb-12 text-primary">
          Our Services
        </h2>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card p-6 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
            >
              <img
                src={service.icon}
                alt={service.title}
                className="mb-4 w-14 h-14 object-contain"
              />
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                {service.title}
              </h3>
              <ul className="list-disc pl-6">
                {service.description.map((item, index) => (
                  <li
                    key={index}
                    className="lg:text-lg text-sm text-muted-foreground mb-2 leading-relaxed"
                  >
                    {item.text}
                  </li>
                ))}
              </ul>
              <Button className="mt-4" asChild>
                <Link to={service.link}>Learn More</Link>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesSection;
