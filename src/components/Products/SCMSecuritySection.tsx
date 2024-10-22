import scm from "@/assets/Products/scm.png";

const scmSecurityData = {
  title: "SCM Security – Automotive",
  image: scm,
  description: "Our SCM Security solution for the automotive industry ensures robust protection throughout the supply chain, safeguarding critical components and data.",
  features: [
    "End-to-end supply chain visibility",
    "Secure communication protocols",
    "Counterfeit part detection",
    "Compliance management"
  ]
};

const SCMSecuritySection = () => {
  return (
    <section className="rounded-md">
      <h2 className="lg:text-3xl text-xl font-semibold mb-6 text-center lg:text-start">
        {scmSecurityData.title}
      </h2>
      <div className="w-full lg:h-[40vh] flex flex-col md:flex-row items-center gap-10">
        <div className="w-full h-full">
          <img
            src={scmSecurityData.image}
            alt={scmSecurityData.title}
            className="rounded-md w-full h-full object-contain object-center"
          />
        </div>
        <div className="w-full h-full p-2 flex flex-col justify-center">
          <p className="text-lg mb-6">
            {scmSecurityData.description}
          </p>
          <ul className="list-disc list-inside space-y-2">
            {scmSecurityData.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SCMSecuritySection;
