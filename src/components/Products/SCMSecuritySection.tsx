import scm from "../../assets/Products/scm.png";

const scmSecurityData = {
  title: "SCM Security – Automotive",
  image: scm,
  description:
    "Our SCM Security solution for the automotive industry ensures robust protection throughout the supply chain, safeguarding critical components and data.",
  features: [
    "End-to-end supply chain visibility",
    "Secure communication protocols",
    "Counterfeit part detection",
    "Compliance management",
  ],
};

const SCMSecuritySection = () => {
  return (
    <section id="SCM-security-automotive" className="relative flex items-center text-white">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-5xl lg:text-7xl font-bold leading-tight">
              {scmSecurityData.title}
              <div className="h-1 w-24 bg-blue-500 mt-4" />
            </h2>

            <p className="text-xl lg:text-2xl text-blue-100">
              {scmSecurityData.description}
            </p>

            <div className="grid gap-6">
              {scmSecurityData.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all group"
                >
                  <span className="text-xl font-semibold text-blue-300 group-hover:text-blue-400">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-500/20 rounded-2xl blur-xl" />
              <img
                src={scmSecurityData.image}
                alt={scmSecurityData.title}
                className="relative rounded-xl w-full object-cover shadow-2xl border border-white/10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SCMSecuritySection;
