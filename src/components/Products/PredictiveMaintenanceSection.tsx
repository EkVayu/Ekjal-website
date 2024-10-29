import predictive from "../../assets/Products/predictive.png";

const predictiveMaintenanceData = {
  title: "Predictive Maintenance for Machines",
  image: predictive,
  description: "Our Predictive Maintenance solution leverages advanced analytics and IoT sensors to optimize machine performance and prevent unexpected downtime.",
  features: [
    "Real-time equipment monitoring",
    "AI-driven failure prediction",
    "Maintenance scheduling optimization",
    "Performance analytics dashboard"
  ]
};

const PredictiveMaintenanceSection = () => {
  return (
    <section id="predictive-maintenance" className="rounded-md ">
      <h2 className="lg:text-3xl text-xl font-semibold mb-6 text-center lg:text-start">
        {predictiveMaintenanceData.title}
      </h2>
      <div className="w-full lg:h-[40vh] flex flex-col md:flex-row items-center gap-10">
        <div className="w-full h-full">
          <img
            src={predictiveMaintenanceData.image}
            alt={predictiveMaintenanceData.title}
            className="rounded-md w-full h-full object-contain object-center"
          />
        </div>
        <div className="w-full h-full p-2 flex flex-col justify-center">
          <p className="text-lg mb-6">
            {predictiveMaintenanceData.description}
          </p>
          <ul className="list-disc list-inside space-y-2">
            {predictiveMaintenanceData.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PredictiveMaintenanceSection;
