import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "../../assets/Products/man-sits-desk-with-laptop-monitor-showing-shield_624163-5544.avif";
import OfferingHeroSection from "./Offering-hero-Section";

const heroData = {
  backgroundImage: heroImage,
  title: "Virtual CISO Services",
  subtitle:
    "Enhance your cybersecurity strategy with our expert Virtual CISO services.",
  buttonText: "Learn More",
  buttonLink: "VirtualCisoPage",
};

const VirtualCisoPage = () => {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="w-full">
        <OfferingHeroSection data={heroData} />
      </section>

      {/* CISO as a Service Section */}
      <section id="VirtualCisoPage" className="py-16">
        <div className="w-full px-3 lg:px-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-primary">
            CISO as a Service
          </h2>
          <p className="text-lg mb-6">
            We are happy to provide you with a solution for CISO staffing that
            offers you unparalleled flexibility, quality of service at
            attractive rates. The service enables you to easily fulfill your
            requirements for a CISO.
          </p>
          <h3 className="text-2xl font-semibold mb-4">Salient features:</h3>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>You provide us with a job description for the CISO.</li>
            <li>We provide you with a skilled CISO candidate for the role.</li>
            <li>
              The person undergoes the selection requirements, interview, and
              any evaluation as envisioned by you for the role.
            </li>
            <li>
              After the candidate clears all the selection process / found
              suitable for the role, the person can start the work on any of the
              engagement models that you select.
            </li>
          </ul>
        </div>
      </section>

      {/* CISO Responsibilities Section */}
      <section className="bg-secondary py-16">
        <div className="w-full px-3 lg:px-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-primary">
            CISO Responsibilities
          </h2>
          <p className="text-lg mb-6">
            Apart from any specific work specified in the JD, the CISO normally
            would provide the following responsibilities:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Representing your organization as CISO when required with external
              and internal stakeholders
            </li>
            <li>
              Ensuring that Cybersecurity related policies, procedures and
              guidelines are prepared adopted/authorized inside your
              organization as needed
            </li>
            <li>
              Helps selection of any cybersecurity certifications that
              organization should undergo, and ensuring that organization is
              prepared to undergo it
            </li>
            <li>
              Helps train stakeholders for cybersecurity related competencies
            </li>
            <li>
              Hosts any external auditors and ensures smooth and successful
              audits outcomes
            </li>
            <li>Helps in any compliance requirements in Cybersecurity</li>
          </ul>
        </div>
      </section>

      {/* Service Models Section */}
      <section className="py-16">
        <div className="w-full px-3 lg:px-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-primary">
            Service Models
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-card p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-4">Fully Outsourced</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Provides all the services that a traditional CISO delivers
                  PLUS value-added services
                </li>
                <li>A dedicated Single Point of Contact will be provided</li>
                <li>
                  Service will be provided by qualified and competent technical
                  resource
                </li>
              </ul>
            </motion.div>
            <motion.div
              className="bg-card p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-2xl font-semibold mb-4">CISO Augmentation</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Security professionals on payroll of EkVayu</li>
                <li>
                  We provide cutting edge consulting services via the security
                  professionals-right from Architecture, design, deployment,
                  support, upgrade and hiring
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to enhance your cybersecurity?
          </h2>
          <p className="text-lg mb-8">
            Contact us today to learn more about our Virtual CISO services.
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

export default VirtualCisoPage;
