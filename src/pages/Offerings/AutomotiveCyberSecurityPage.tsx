import { motion } from "framer-motion";
import cyber from "../../assets/Products/cyber.avif";
import { Link } from "react-router-dom";
import heroImage from "../../assets/Products/man-sits-desk-with-laptop-monitor-showing-shield_624163-5544.avif";
import OfferingHeroSection from "./Offering-hero-Section";

const heroData = {
  backgroundImage: heroImage,
  title: "Automotive Cybersecurity Solutions",
  subtitle:
    "Protecting the future of connected and autonomous vehicles in compliance with UNECE 155/UNECE 156 mandate",
  buttonText: "Learn More",
  buttonLink: "AutomotiveCyberSecurityPage",
};

const AutomotiveCyberSecurityPage = () => {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="pb-20">
        <OfferingHeroSection data={heroData} />
      </section>

      {/* Overview Section */}
      <section id="AutomotiveCyberSecurityPage" className="py-16">
        <div className="w-full px-3 lg:px-20">
          <h2 className="text-3xl font-semibold mb-8 text-primary">
            Automotive Cybersecurity Mandate
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg mb-4">
                As per UNECE 155/UNECE 156 mandate, all passenger vehicles need
                to be certified to be cyber safe. It is the responsibility of
                the OEM to ensure certification and have processes in place to
                manage the entire lifecycle to be cyber safe.
              </p>
              <p className="text-lg mb-4">
                Currently, approximately 54 countries, including EU, UK, Japan,
                Australia, and New Zealand are signatories. Beyond the June 2024
                deadline, no new passenger car model can be sold in these
                countries unless it is certified to be cyber safe. Currently,
                approximately 54 countries, including EU, UK, Japan, Australia,
                and New Zealand are signatories. Beyond the June 2024 deadline,
                no new passenger car model can be sold in these countries unless
                it is certified to be cyber safe. Currently, approximately 54
                countries, including EU, UK, Japan, Australia, and New Zealand
                are signatories. Beyond the June 2024 deadline, no new passenger
                car model can be sold in these countries unless it is certified
                to be cyber safe.
              </p>
            </div>
            <div>
              <img
                src={cyber}
                alt="Automotive Cybersecurity"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-muted">
        <div className="w-full px-3 lg:px-20">
          <h2 className="text-3xl font-semibold mb-12 text-center text-primary">
            Our Automotive Cybersecurity Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Cyber Security Management System (CSMS) Development",
                description:
                  "Supporting the development and implementation of CSMS",
              },
              {
                title: "Project Dependent Cybersecurity Management",
                description:
                  "Tailored cybersecurity management for specific projects",
              },
              {
                title: "Distributed Development Cybersecurity Management",
                description:
                  "Managing cybersecurity across distributed development teams",
              },
              {
                title: "Regular Cybersecurity Management Support",
                description:
                  "Ongoing support for continued cybersecurity management",
              },
              {
                title: "Product Lifecycle Cybersecurity",
                description:
                  "Supporting cybersecurity in concept, development, and post-production phases",
              },
              {
                title: "Threat And Risk Analysis (TARA) Support",
                description:
                  "Comprehensive threat and risk analysis for automotive systems",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-card p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Secure Your Automotive Future?
          </h2>
          <p className="text-xl mb-8">
            Contact us today for comprehensive automotive cybersecurity
            solutions and UNECE 155/156 compliance support
          </p>
          <Link to={"/contact-us"}>
            <button className="bg-white text-primary font-semibold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-colors">
              Get Started
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AutomotiveCyberSecurityPage;
