import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import image from "../../assets/Home-page-images/939c5da1-6097-4d5c-a0ec-6071a1ef12b4.jpg";
import { Link } from "react-router-dom";

const data = {
  title: " Empowering Your Business with Advanced Cybersecurity Solutions",
  description: [
    {
      id: 1,
      description:
        "In today's digital era, cybersecurity isn't just a necessity—it's essential for business growth and innovation. At EkJal and EkVayu, we understand that protecting your digital assets shouldn't be a headache. That's why we offer tailored, innovative solutions to safeguard your business.",
    },
    {
      id: 2,
      description:
        " By partnering with us, you gain access to cutting-edge technologies and proactive monitoring systems that ensure your operations remain secure. We're not just focused on defense; we're committed to empowering your organization to thrive in a digital-first world.",
    },
    {
      id: 3,
      description:
        "Our approach emphasizes continuous improvement and vigilance, ensuring that your business remains one step ahead of emerging threats. Let us handle your IT and cybersecurity, so you can focus on growing your business.",
    },
  ],
  image: image,
  button: {
    text: "Explore Our Solutions",
    link: "/about-us",
  },
};

function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5 } },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="flex items-center justify-center lg:py-16 py-5 px-3 lg:px-20"
    >
      <div className="w-full flex flex-col md:flex-row items-center md:gap-20 gap-5">
        <div className="w-full h-[500px] flex justify-center rounded-md overflow-hidden">
          <img 
            src={data.image} 
            alt="Cybersecurity" 
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="w-full text-foreground text-center md:text-left">
          <h1 className="lg:text-3xl text-xl font-bold mb-4 text-primary">{data.title}</h1>
          {data.description.map((item) => (
            <p key={item.id} className="lg:text-lg text-sm text-muted-foreground mb-8 leading-relaxed">
              {item.description}
            </p>
          ))}
          <Button variant="default" asChild size="lg" className="bg-primary text-primary-foreground text-lg px-8 py-3 rounded-md shadow-lg hover:shadow-xl">
            <Link to={data.button.link}>{data.button.text}</Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export default AboutSection;
