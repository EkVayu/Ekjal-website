import phishing from "../../assets/Products/phishing.png";

const phishingPreventionData = {
  title: "Phishing Prevention Tool",
  image: phishing,
  description: "Our AI-powered Phishing Prevention Tool actively protects users from social engineering attacks, ensuring data security and privacy.",
  features: [
    "Advanced AI-based analytics",
    "Real-time threat detection",
    "User behavior analysis",
    "Continuous protection against evolving threats"
  ]
};

const PhishingPreventionSection = () => {
  return (
    <section id="phishing-prevention" className="rounded-md overflow-hidden">
      <h2 className="lg:text-3xl text-xl font-semibold mb-6 text-center lg:text-start">
        {phishingPreventionData.title}
      </h2>
      <div className="w-full lg:h-[40vh] flex flex-col md:flex-row items-center gap-10">
        <div className="w-full h-full overflow-hidden ">
          <img
            src={phishingPreventionData.image}
            alt={phishingPreventionData.title}
            className="rounded-md drop-shadow-2xl shadow-foreground w-full h-full object-contain  object-center"
          />
        </div>
        <div className="w-full h-full p-2 flex flex-col justify-center">
          <p className="text-lg mb-6">
            {phishingPreventionData.description}
          </p>
          <ul className="list-disc list-inside space-y-2">
            {phishingPreventionData.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PhishingPreventionSection;
