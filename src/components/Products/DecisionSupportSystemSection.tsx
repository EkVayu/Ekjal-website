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
    <section id="decision-support-system" className="rounded-md">
      <h2 className="lg:text-3xl text-xl font-semibold mb-6 text-center lg:text-start">
        {decisionSupportSystemData.title}
      </h2>
      <div className="w-full lg:h-[40vh] flex flex-col md:flex-row items-center gap-10">
        <div className="w-full h-full">
          <img
            src={decisionSupportSystemData.image}
            alt={decisionSupportSystemData.title}
            className="rounded-md w-full h-full object-contain object-center"
          />
        </div>
        <div className="w-full h-full p-2 flex flex-col justify-center">
          <p className="text-lg mb-6">
            {decisionSupportSystemData.description}
          </p>
          <ul className="list-disc list-inside space-y-2">
            {decisionSupportSystemData.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DecisionSupportSystemSection;
