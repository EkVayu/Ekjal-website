import { motion } from "framer-motion";
import cyber from "../../assets/Products/cyber.avif";
import { Link } from "react-router-dom";
import heroImage from "../../assets/Products/man-sits-desk-with-laptop-monitor-showing-shield_624163-5544.avif";
import OfferingHeroSection from "./Offering-hero-Section";
import {
  Shield,
  Lock,
  Car,
  Settings,
  Users,
  Clock,
  Activity,
  FileSearch,
} from "lucide-react";

const heroData = {
  backgroundImage: heroImage,
  title: "Automotive Cybersecurity Solutions",
  subtitle:
    "Protecting the future of connected and autonomous vehicles in compliance with UNECE 155/UNECE 156 mandate",
  buttonText: "Learn More",
  buttonLink: "AutomotiveCyberSecurityPage",
};

const services = [
  {
    title: "Cyber Security Management System (CSMS) Development",
    description: "Supporting the development and implementation of CSMS",
    icon: <Shield className="w-6 h-6 text-primary" />,
  },
  {
    title: "Project Dependent Cybersecurity Management",
    description: "Tailored cybersecurity management for specific projects",
    icon: <Settings className="w-6 h-6 text-primary" />,
  },
  {
    title: "Distributed Development Cybersecurity Management",
    description: "Managing cybersecurity across distributed development teams",
    icon: <Users className="w-6 h-6 text-primary" />,
  },
  {
    title: "Regular Cybersecurity Management Support",
    description: "Ongoing support for continued cybersecurity management",
    icon: <Clock className="w-6 h-6 text-primary" />,
  },
  {
    title: "Product Lifecycle Cybersecurity",
    description:
      "Supporting cybersecurity in concept, development, and post-production phases",
    icon: <Activity className="w-6 h-6 text-primary" />,
  },
  {
    title: "Threat And Risk Analysis (TARA) Support",
    description:
      "Comprehensive threat and risk analysis for automotive systems",
    icon: <FileSearch className="w-6 h-6 text-primary" />,
  },
];

const AutomotiveCyberSecurityPage = () => {
  return (
    <div className="bg-background text-foreground">
      <section className="w-full">
        <OfferingHeroSection data={heroData} />
      </section>

      {/* Enhanced Overview Section */}
      <section
        id="AutomotiveCyberSecurityPage"
        className="py-10 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent" />
        <div className="w-full px-3 lg:px-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center mb-12"
          >
            <Shield className="w-16 h-16 text-primary mb-4" />
            <h2 className="text-4xl font-bold mb-4 text-primary text-center">
              Automotive Cybersecurity Mandate
            </h2>
            <div className="w-24 h-1 bg-primary rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  As per UNECE 155/UNECE 156 mandate, all passenger vehicles
                  need to be certified to be cyber safe. It is the
                  responsibility of the OEM to ensure certification and have
                  processes in place to manage the entire lifecycle to be cyber
                  safe.
                </p>
                <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    Key Requirements
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Lock className="w-5 h-5 mr-3 text-primary" />
                      <span>Comprehensive vehicle certification</span>
                    </li>
                    <li className="flex items-center">
                      <Car className="w-5 h-5 mr-3 text-primary" />
                      <span>Lifecycle management processes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={cyber}
                alt="Automotive Cybersecurity"
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section className="py-24 bg-gradient-to-b from-muted to-background">
        <div className="w-full px-3 lg:px-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-16 text-center text-primary"
          >
            Our Automotive Cybersecurity Services
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group bg-card p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-primary/10 hover:border-primary/30"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-12 w-12 bg-primary/10 rounded-lg mb-6 group-hover:bg-primary/20 transition-colors duration-300 flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/path/to/pattern.svg')] opacity-10" />
        <div className="container mx-auto px-4 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Secure Your Automotive Future?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today for comprehensive automotive cybersecurity
              solutions and UNECE 155/156 compliance support
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
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AutomotiveCyberSecurityPage;
