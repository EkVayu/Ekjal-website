import { Link } from "react-router-dom";

const metrics = [
  {
    title: "Incident Detection and Response Time",
    description:
      "Measure the speed and efficiency of identifying and addressing security incidents.",
  },
  {
    title: "Phishing Defense",
    description:
      "Evaluate the effectiveness of anti-phishing tools and user awareness.",
  },
  {
    title: "User Awareness and Engagement",
    description:
      "Track the level of employee participation and knowledge in security practices.",
  },
  {
    title: "Vulnerability Remediation Efficiency",
    description:
      "Assess the speed and thoroughness of addressing identified vulnerabilities.",
  },
  {
    title: "System Adaptability and Scalability",
    description:
      "Measure the ability of security systems to grow and adapt to new threats.",
  },
  {
    title: "Compliance and Regulatory Performance",
    description:
      "Track adherence to industry standards and regulatory requirements.",
  },
  {
    title: "Risk Reduction and Threat Intelligence",
    description:
      "Evaluate the effectiveness of threat prevention and risk mitigation strategies.",
  },
  {
    title: "Advanced Persistent Threat (APT) Prevention",
    description:
      "Measure the ability to detect and prevent sophisticated, long-term attacks.",
  },
  {
    title: "Ransomware Defense and Recovery",
    description:
      "Assess the effectiveness of ransomware prevention and recovery capabilities.",
  },
  {
    title: "Endpoint Security Effectiveness",
    description:
      "Evaluate the protection of individual devices within the network.",
  },
];

function OutcomeDrivenMetrics() {
  return (
    <div className="bg-secondary/50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-20">
        <div className="container mx-auto px-4 text-secondary">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Outcome-Driven Metrics (ODM)
          </h1>
          <p className="text-xl mb-8">
            Empowering Cyber Resilience Through Evangelism, Vigilance, and
            Metrics
          </p>
        </div>
      </section>

      {/* Metrics Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center text-primary">
            Key Performance Indicators
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-secondary rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">{metric.title}</h3>
                <p className="text-foreground/80">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Frameworks */}
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center text-primary">
            Strategic Frameworks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-semibold mb-4">WAVE Framework</h3>
              <ul className="list-disc list-inside">
                <li>
                  <strong className="text-primary">W</strong>isdom: Empowering
                  employees with knowledge
                </li>
                <li>
                  <strong className="text-primary">A</strong>wareness:
                  Cultivating a vigilant mindset
                </li>
                <li>
                  <strong className="text-primary">V</strong>igilance:
                  Encouraging continuous monitoring
                </li>
                <li>
                  <strong className="text-primary">E</strong>ngagement:
                  Fostering collaboration
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-semibold mb-4">FLOW Framework</h3>
              <ul className="list-disc list-inside">
                <li>
                  <strong className="text-primary">F</strong>ocus: Prioritizing
                  effective security measures
                </li>
                <li>
                  <strong className="text-primary">L</strong>earning: Promoting
                  continuous education
                </li>
                <li>
                  <strong className="text-primary">O</strong>bservation: Keenly
                  monitoring systems
                </li>
                <li>
                  <strong className="text-primary">W</strong>ell-being: Ensuring
                  a safe digital environment
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Enhance Your Cybersecurity Metrics?
          </h2>
          <p className="text-xl mb-8">
            Contact us today to learn how our Outcome-Driven Metrics can
            transform your security posture.
          </p>
          <Link to={"/contact-us"}>
            <button className="bg-white text-primary font-semibold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-colors">
              Get Started
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default OutcomeDrivenMetrics;
