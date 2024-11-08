import { useState } from "react";
import { send } from "emailjs-com";
import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const contactData = {
  title: "Secure Your Digital Future",
  subtitle:
    "Connect with our cybersecurity experts to safeguard your digital assets and ensure your peace of mind.",
  formTitle: "Get in Touch",
  inputFields: [
    { id: "user_name", label: "Name", type: "text", icon: <FaUser /> },
    { id: "user_email", label: "Email", type: "email", icon: <FaEnvelope /> },
    { id: "user_phone", label: "Phone", type: "tel", icon: <FaPhone /> },
  ],
  messageField: {
    id: "message",
    label: "Message",
    rows: 4,
    placeholder: "Your Message",
  },
  submitButton: {
    text: "Send Message",
  },
};

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formData,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        toast.success("Message sent successfully!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setFormData({
          user_name: "",
          user_email: "",
          user_phone: "",
          message: "",
        });
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to send message:", error);
        toast.error("Failed to send message. Please try again.", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setLoading(false);
      });
  };
  return (
    <div className="px-3 lg:px-20">
      <ToastContainer />
      <motion.div
        className="w-full min-h-screen rounded-md  overflow-hidden flex flex-col lg:flex-row"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="lg:w-1/2 w-full lg:h-screen flex flex-col items-center justify-between p-3 bg-gradient-to-t from-primary/10 to-primary">
          <div className="flex flex-col justify-center items-center text-secondary p-8">
            <motion.h2
              className="text-2xl sm:text-5xl font-bold mb-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {contactData.title}
            </motion.h2>
            <motion.p
              className="lg:text-xl text-sm text-center max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {contactData.subtitle}
            </motion.p>
          </div>
          <div className="w-full h-64 lg:h-80 rounded-md overflow-hidden shadow shadow-foreground/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5790646743535!2d77.35669767495601!3d28.612402184995545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce56a46bcf20d%3A0xb8dae57f4172c44e!2sJSS%20STEP%20Incubator!5e0!3m2!1sen!2sin!4v1727675976657!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="lg:w-1/2 p-8 sm:p-12">
          <motion.h3
            className="text-3xl font-bold text-foreground mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {contactData.formTitle}
          </motion.h3>
          <form onSubmit={handleSubmit}>
            {contactData.inputFields.map((field, index) => (
              <motion.div
                key={field.id}
                className="mb-6 relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <label
                  htmlFor={field.id}
                  className="block text-foreground/60 font-semibold mb-2"
                >
                  {field.label}
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-foreground/60">
                    {field.icon}
                  </span>
                  <input
                    type={field.type}
                    id={field.id}
                    required
                    value={formData[field.id as keyof typeof formData]}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder={`Your ${field.label}`}
                  />
                </div>
              </motion.div>
            ))}{" "}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label
                htmlFor={contactData.messageField.id}
                className="block text-foreground/60 font-semibold mb-2"
              >
                {contactData.messageField.label}
              </label>
              <textarea
                id={contactData.messageField.id}
                value={formData.message}
                required
                onChange={handleChange}
                rows={contactData.messageField.rows}
                className="w-full px-4 py-2 border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                placeholder={contactData.messageField.placeholder}
              ></textarea>
            </motion.div>
            <motion.button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-secondary py-3 px-4 rounded-lg hover:bg-primary/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileTap={{ scale: 0.95 }}
            >
              {loading ? "Sending..." : contactData.submitButton.text}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactUs;
