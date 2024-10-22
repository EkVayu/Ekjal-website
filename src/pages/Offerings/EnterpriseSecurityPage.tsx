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

const EnterpriseSecurityPage = () => {
  const ServiceSection = ({
    title,
    items,
  }: {
    title: string;
    items: Array<{ icon: React.ElementType; title: string }>;
  }) => (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-primary">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="bg-card p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <item.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
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

  return (
    <div className="bg-background text-foreground">
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-secondary mb-6">
            Enterprise Security Solutions
          </h1>
          <p className="text-xl text-secondary mb-8">
            Protecting your business with cutting-edge cybersecurity
          </p>
          <button className="bg-secondary text-primary font-semibold py-2 px-6 rounded-lg hover:bg-opacity-90 transition-colors">
            Learn More
          </button>
        </div>
      </section>

      <ServiceSection title="Managed Services" items={managedServices} />
      <ServiceSection
        title="Security Architecture"
        items={securityArchitecture}
      />
      <ServiceSection
        title="Enterprise Security Advisory"
        items={enterpriseSecurityAdvisory}
      />

      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Secure Your Enterprise?
          </h2>
          <p className="text-xl mb-8">
            Contact us today for a free consultation and security assessment
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

export default EnterpriseSecurityPage;
