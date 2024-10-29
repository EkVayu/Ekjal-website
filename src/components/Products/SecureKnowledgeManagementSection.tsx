import { motion } from "framer-motion";
import customersupport from "../../assets/Products/customer-support.png";

const secureKnowledgeManagementData = {
  title: "Secure Knowledge Management",
  image: customersupport,
  description:
    "Our Secure Knowledge Management tool uses AI-based analytics to classify information, enforce security, and provide easy access to authorized users across various data formats.",
  features: [
    "AI-powered data classification",
    "Customizable security levels",
    "Multi-modal search and retrieval",
    "Support for various file formats",
  ],
};

const SecureKnowledgeManagementSection = () => {
  return (
    <section id="secure-knowledge-management" className="w-full">
      <div className="w-full">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-primary text-left"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {secureKnowledgeManagementData.title}
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            <img
              src={secureKnowledgeManagementData.image}
              alt={secureKnowledgeManagementData.title}
              className="relative rounded-lg shadow-2xl w-full h-[400px] transform group-hover:scale-[1.02] transition duration-500"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-xl leading-relaxed text-foreground/80">
              {secureKnowledgeManagementData.description}
            </p>

            <div className="space-y-4">
              {secureKnowledgeManagementData.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-3 bg-background/50 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                >
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span className="text-lg">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SecureKnowledgeManagementSection;
