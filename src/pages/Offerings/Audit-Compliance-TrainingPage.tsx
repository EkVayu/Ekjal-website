import { motion } from "framer-motion";
import cyber from "../../assets/Products/cyber.avif";
import { Link } from "react-router-dom";
import OfferingHeroSection from "./Offering-hero-Section";
import heroImage from "../../assets/Products/man-sits-desk-with-laptop-monitor-showing-shield_624163-5544.avif";

const heroData = {
  backgroundImage: heroImage,
  title: "Audit, Compliance & Training",
  subtitle:
    "Empowering your organization with comprehensive security solutions",
  buttonText: "Learn More",
  buttonLink: "AuditComplianceTrainingPage",
};

const AuditComplianceTrainingPage = () => {
  const auditStandards = [
    "ISO 27001 / 30001 / 22001",
    "SSAE18 / ISAE 3402 / SOC 2 Type 1 & 2",
    "21 CFR Part 11 / HIPAA",
    "PCI/DSS, RBI",
    "Privacy / GDPR / Safe Harbor",
    "NIST CSF",
    "CIS/SANS 20",
    "HiTRUST CSF",
  ];

  return (
    <div className="bg-background text-foreground">
      <OfferingHeroSection data={heroData} />

      {/* Audit Section with Enhanced Design */}
      <section id="AuditComplianceTrainingPage" className="py-24">
        <div className="w-full px-3 lg:px-20">
          <motion.h2
            className="text-5xl font-bold mb-12 text-primary text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Security Audits
          </motion.h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={cyber}
                alt="Security Audit"
                className="rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
              />
            </motion.div>
            <motion.div
              className="md:w-1/2 space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-3xl font-bold text-primary">
                Comprehensive Assessments
              </h3>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Our expert team conducts thorough security audits to identify
                vulnerabilities and assess your organization's overall security
                posture.
              </p>
              <ul className="space-y-4">
                {[
                  "Network Security Audits",
                  "Application Security Assessments",
                  "Cloud Security Audits",
                  "IoT Security Evaluations",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center space-x-3 text-lg"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="h-2 w-2 bg-primary rounded-full" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Compliance Section with Glass Effect */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="w-full px-3 lg:px-20">
          <motion.h2
            className="text-5xl font-bold mb-16 text-primary text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Compliance Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {auditStandards.map((standard, index) => (
              <motion.div
                key={index}
                className="backdrop-blur-md bg-white/30 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  {standard}
                </h3>
                <p className="text-lg text-muted-foreground">
                  Ensure your organization meets the stringent requirements of{" "}
                  {standard}.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary"></div>
        <motion.div
          className="container mx-auto px-4 text-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-5xl font-bold mb-8 text-white">
            Ready to Enhance Your Security?
          </h2>
          <p className="text-2xl mb-12 text-white/90 max-w-2xl mx-auto">
            Contact us today to learn more about our audit, compliance, and
            training services.
          </p>
          <Link to="/contact-us">
            <motion.button
              className="bg-white text-primary font-bold py-4 px-12 rounded-full text-lg hover:bg-opacity-90 transition-all duration-300 hover:shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default AuditComplianceTrainingPage;
