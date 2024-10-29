import { motion } from "framer-motion";
import discussion from "../../assets/Products/discussion.png";

const decisionSupportSystemData = {
  title: "Decision Support System",
  image: discussion,
  description:
    "Our Decision Support System empowers organizations with data-driven insights, enabling informed decision-making across various business processes.",
  features: [
    "Real-time data analysis",
    "Predictive modeling",
    "Interactive dashboards",
    "Scenario planning tools",
  ],
};

const DecisionSupportSystemSection = () => {
  return (
    <section id="decision-support-system" className="w-full">
      <div className="w-full">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-primary mb-12 text-left"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {decisionSupportSystemData.title}
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            <img
              src={decisionSupportSystemData.image}
              alt={decisionSupportSystemData.title}
              className="relative rounded-lg shadow-2xl w-full h-auto transform group-hover:scale-[1.02] transition duration-500"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-xl text-foreground/80 leading-relaxed">
              {decisionSupportSystemData.description}
            </p>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">
                Key Features
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {decisionSupportSystemData.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-secondary p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary">✓</span>
                      </div>
                      <span className="text-foreground/80">{feature}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DecisionSupportSystemSection;
