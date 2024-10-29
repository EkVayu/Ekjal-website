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
    <section id="secure-knowledge-management" className="rounded-md ">
      <h2 className="lg:text-3xl text-xl font-semibold mb-6 text-center lg:text-start">
        {secureKnowledgeManagementData.title}
      </h2>
      <div className="w-full lg:h-[40vh] flex flex-col md:flex-row items-center gap-10 ">
        <div className="w-full h-full ">
          <img
            src={secureKnowledgeManagementData.image}
            alt={secureKnowledgeManagementData.title}
            className="rounded-md w-full h-full object-contain object-center"
          />
        </div>
        <div className="w-full h-full p-2 flex flex-col justify-center ">
          <p className="text-lg mb-6">
            {secureKnowledgeManagementData.description}
          </p>
          <ul className="list-disc list-inside space-y-2">
            {secureKnowledgeManagementData.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SecureKnowledgeManagementSection;
