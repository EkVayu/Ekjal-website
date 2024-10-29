import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  Eye,
  Server,
  Cloud,
  Zap,
  Users,
  Database,
  FileCheck,
  AlertTriangle,
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "../../assets/Products/man-sits-desk-with-laptop-monitor-showing-shield_624163-5544.avif";
import OfferingHeroSection from "./Offering-hero-Section";

const heroData = {
  backgroundImage: heroImage,
  title: "Enterprise Security Solutions",
  subtitle: "Protecting your business with cutting-edge cybersecurity",
  buttonText: "Learn More",
  buttonLink: "EnterpriseSecurityPage",
};

const EnterpriseSecurityPage = () => {
  const ServiceSection = ({
    title,
    items,
  }: {
    title: string;
    items: Array<{ icon: React.ElementType; title: string }>;
  }) => (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="w-full px-4 lg:px-20">
        <motion.h2
          className="text-4xl font-bold mb-16 text-center text-primary"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-primary/10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground/90">
                  {item.title}
                </h3>
              </div>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  const managedServices = [
    { icon: Shield, title: "Identify and Control Digital assets" },
    { icon: Eye, title: "Log Analytics and threat identification" },
    {
      icon: AlertTriangle,
      title: "Security Incident – timely alerts & response",
    },
    { icon: FileCheck, title: "AV, Patch Management" },
    { icon: Cloud, title: "Cloud Misconfiguration check" },
    { icon: Zap, title: "Red Teaming" },
  ];

  const securityArchitecture = [
    { icon: Lock, title: "Zero Trust Network Architecture (ZTNA)" },
    { icon: Shield, title: "Ransomware Protection Strategy" },
    { icon: FileCheck, title: "TOGFA, SABSA, OSA, NIST based framework" },
    { icon: Users, title: "Cybersecurity Consolidation" },
    { icon: Eye, title: "Privacy Protection" },
    { icon: Server, title: "Micro Segmentation" },
    { icon: Zap, title: "Mobile devices" },
    { icon: FileCheck, title: "ISMS Deployments" },
    { icon: Shield, title: "ISO based frameworks" },
    { icon: Eye, title: "Continuous Auditing" },
    { icon: Cloud, title: "Securing Cloud Assets" },
    { icon: AlertTriangle, title: "Protect from LLM threats" },
    { icon: Users, title: "Third party risks handling" },
    { icon: Lock, title: "Balance security with usability experiences" },
    { icon: Database, title: "Data Security" },
  ];

  const enterpriseSecurityAdvisory = [
    { icon: FileCheck, title: "Advisory and Deployment support" },
    { icon: Users, title: "Help in framework selection process" },
    {
      icon: Shield,
      title: "Information Security Management System (ISMS) Development",
    },
    { icon: FileCheck, title: "Advisory ISO27001:2022" },
    { icon: Eye, title: "ISMS pre audits, Support in gap closures" },
    { icon: Users, title: "Interfacing with external auditing teams" },
    { icon: AlertTriangle, title: "Supporting non compliances closure" },
    { icon: Zap, title: "Supporting PDCA activities" },
  ];

  const CallToAction = () => (
    <motion.section
      className="py-24 bg-gradient-to-r from-primary to-primary/80 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">
          Ready to Secure Your Enterprise?
        </h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto">
          Contact us today for a comprehensive security assessment and
          personalized solutions
        </p>
        <Link to="/contact-us">
          <motion.button
            className="bg-white text-primary font-semibold py-4 px-10 rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </Link>
      </div>
    </motion.section>
  );

  return (
    <div className="bg-background text-foreground">
      <OfferingHeroSection data={heroData} />
      <div id="EnterpriseSecurityPage">
        <ServiceSection title="Managed Services" items={managedServices} />
        <ServiceSection
          title="Security Architecture"
          items={securityArchitecture}
        />
        <ServiceSection
          title="Enterprise Security Advisory"
          items={enterpriseSecurityAdvisory}
        />
      </div>
      <CallToAction />
    </div>
  );
};

export default EnterpriseSecurityPage;
