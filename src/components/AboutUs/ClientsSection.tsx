import { motion } from "framer-motion";
import Slack from "@/assets/Client-Images/abstract-logo-flame-shape_1043-44.avif";
import Stripe from "@/assets/Client-Images/abstract-logo-template-design_1017-30872.avif";
import OVO from "@/assets/Client-Images/abstract-logo-flame-shape_1043-44.avif";

const clientsData = {
  sectionTitle:
    "Trusted by <span class='text-primary'>1500+</span> companies since 2012",
  sectionDescription:
    "Our clients range from innovative startups to Fortune 500 companies",
  clients: [
    {
      name: "Slack",
      logo: Slack,
    },
    {
      name: "PayPal",
      logo: Stripe,
    },
    {
      name: "Mandiri",
      logo: OVO,
    },
    {
      name: "Stripe",
      logo: Stripe,
    },
    {
      name: "OVO",
      logo: OVO,
    },
    {
      name: "Figma",
      logo: Stripe,
    },
  ],
};

const ClientsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-4xl font-bold mb-8 text-center text-gray-800"
            dangerouslySetInnerHTML={{ __html: clientsData.sectionTitle }}
          />
          <p className="text-xl text-center text-gray-600 mb-12">
            {clientsData.sectionDescription}
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {clientsData.clients.map((client, index) => (
            <motion.div
              key={client.name}
              className="flex justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.5 }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-16 md:h-20 object-contain transition-all duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
