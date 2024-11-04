import { motion } from "framer-motion";
import { Shield, Lock, Brain, Activity } from "lucide-react";

const phishingPreventionData = {
  title: "Phishing Prevention Tool",
  image:
    "https://img.freepik.com/free-photo/hand-pressing-envelope-that-is-sent-world_1232-279.jpg?t=st=1730182702~exp=1730186302~hmac=d24cf2f976dedd917daf0e6fc79ec37ef083b8a7422269861bd13628d4a2fadf&w=996",
  description:
    "Our AI-powered Phishing Prevention Tool actively protects users from social engineering attacks, ensuring data security and privacy.",
  features: [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Advanced AI Analytics",
      description: "Smart detection using machine learning algorithms",
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Real-time Detection",
      description: "Instant threat identification and prevention",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Behavior Analysis",
      description: "Comprehensive user activity monitoring",
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Continuous Protection",
      description: "24/7 defense against evolving threats",
    },
  ],
};

const PhishingPreventionSection = () => {
  return (
    <section id="phishing-prevention" className="w-full px-3 lg:px-20">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">
            {phishingPreventionData.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            {phishingPreventionData.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src={phishingPreventionData.image}
              alt={phishingPreventionData.title}
              className="relative rounded-2xl shadow-2xl w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {phishingPreventionData.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                  <div className="text-primary">{feature.icon}</div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PhishingPreventionSection;
