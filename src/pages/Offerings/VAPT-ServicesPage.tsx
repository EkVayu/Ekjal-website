import { motion } from "framer-motion";
import cyber from "../../assets/Products/cyber.avif";
import { Link } from "react-router-dom";
import heroImage from "../../assets/Products/man-sits-desk-with-laptop-monitor-showing-shield_624163-5544.avif";
import OfferingHeroSection from "./Offering-hero-Section";

const heroData = {
  backgroundImage: heroImage,
  title: "VAPT Services",
  subtitle: "Comprehensive Vulnerability Assessment and Penetration Testing",
  buttonText: "Learn More",
  buttonLink: "VAPTServicesPage",
};

const VAPTServicesPage = () => {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="pb-20">
        <OfferingHeroSection data={heroData} />
      </section>

      {/* Introduction Section */}
      <section id="VAPTServicesPage" className="py-16">
        <div className="w-full px-3 lg:px-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src={cyber}
                alt="VAPT Services"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-semibold mb-4 text-primary">
                What is VAPT?
              </h2>
              <p className="text-lg mb-4">
                Vulnerability Assessment and Penetration Testing (VAPT) is a
                comprehensive security testing approach that identifies,
                analyzes, and helps mitigate security vulnerabilities in your
                systems and applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="py-16 bg-muted">
        <div className="w-full px-3 lg:px-20">
          <h2 className="text-3xl font-semibold mb-8 text-center text-primary">
            Ekjal VAPT Services Coverage
          </h2>
          <p className="text-lg text-center mb-8">
            We carry out VAPT services for securing:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Web-based Infrastructure and Applications",
              "Cloud-based Applications",
              "Mobile Applications",
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-lg shadow-md text-center"
              >
                <h3 className="text-xl font-semibold mb-2">{item}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16">
        <div className="w-full px-3 lg:px-20">
          <h2 className="text-3xl font-semibold mb-8 text-center text-primary">
            VAPT – Use Cases Supported
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Web Pages",
              "Web Applications",
              "APIs",
              "Applications",
              "Networks",
              "Configurations",
              "Servers / Infra",
              "Social Engineering",
            ].map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="bg-primary text-primary-foreground p-4 rounded-lg shadow-md text-center"
              >
                <p className="font-semibold">{useCase}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-muted">
        <div className="w-full px-3 lg:px-20">
          <h2 className="text-3xl font-semibold mb-8 text-center text-primary">
            Our VAPT Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Network VAPT",
                description:
                  "Comprehensive assessment of network infrastructure",
              },
              {
                title: "Web Application VAPT",
                description:
                  "In-depth testing of web applications for vulnerabilities",
              },
              {
                title: "Mobile App VAPT",
                description:
                  "Security assessment for iOS and Android applications",
              },
              {
                title: "Cloud VAPT",
                description:
                  "Vulnerability assessment for cloud-based infrastructure",
              },
              {
                title: "IoT VAPT",
                description: "Security testing for Internet of Things devices",
              },
              {
                title: "API VAPT",
                description:
                  "Thorough testing of API endpoints and integrations",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="w-full px-3 lg:px-20">
          <h2 className="text-3xl font-semibold mb-8 text-center text-primary">
            Benefits of Our VAPT Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <svg
                className="w-6 h-6 text-primary mr-4 mt-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Proactive Security
                </h3>
                <p className="text-muted-foreground">
                  Identify and address vulnerabilities before they can be
                  exploited
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <svg
                className="w-6 h-6 text-primary mr-4 mt-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <div>
                <h3 className="text-xl font-semibold mb-2">Compliance</h3>
                <p className="text-muted-foreground">
                  Meet regulatory requirements and industry standards
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4 text-secondary">
            Ready to Secure Your Systems?
          </h2>
          <p className="text-xl mb-8 text-secondary">
            Contact us today for a comprehensive VAPT assessment
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

export default VAPTServicesPage;
