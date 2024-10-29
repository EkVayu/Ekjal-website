import { motion } from "framer-motion";
import cyber from "../../assets/Products/cyber.avif";
import { Link } from "react-router-dom";

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
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-secondary mb-6">
            Audit, Compliance & Training
          </h1>
          <p className="text-xl text-secondary mb-8">
            Empowering your organization with comprehensive security solutions
          </p>
        </div>
      </section>

      {/* Audit Section */}
      <section className="py-16">
        <div className="w-full px-3 lg:px-20">
          <h2 className="text-4xl font-semibold mb-8 text-primary">
            Security Audits
          </h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src={cyber}
                alt="Security Audit"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h3 className="text-2xl font-semibold mb-4">
                Comprehensive Assessments
              </h3>
              <p className="text-lg mb-4">
                Our expert team conducts thorough security audits to identify
                vulnerabilities and assess your organization's overall security
                posture.
              </p>
              <ul className="list-disc list-inside text-lg">
                <li>Network Security Audits</li>
                <li>Application Security Assessments</li>
                <li>Cloud Security Audits</li>
                <li>IoT Security Evaluations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-16 bg-muted">
        <div className="w-full px-3 lg:px-20">
          <h2 className="text-4xl font-semibold mb-8 text-primary">
            Compliance Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {auditStandards.map((standard, index) => (
              <motion.div
                key={index}
                className="bg-card p-6 rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-semibold mb-4">{standard}</h3>
                <p className="text-lg">
                  Ensure your organization meets the stringent requirements of{" "}
                  {standard}.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section className="py-16">
        <div className="w-full px-3 lg:px-20">
          <h2 className="text-4xl font-semibold mb-8 text-primary">
            Security Training Programs
          </h2>
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pl-12">
              <img
                src={cyber}
                alt="Security Training"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">Empower Your Team</h3>
              <p className="text-lg mb-4">
                Our tailored training programs equip your staff with the
                knowledge and skills to maintain a robust security posture.
              </p>
              <ul className="list-disc list-inside text-lg">
                <li>Cybersecurity Awareness Training</li>
                <li>Phishing Simulation Exercises</li>
                <li>Incident Response Workshops</li>
                <li>Secure Coding Practices</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Enhance Your Security?
          </h2>
          <p className="text-xl mb-8">
            Contact us today to learn more about our audit, compliance, and
            training services.
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

export default AuditComplianceTrainingPage;
