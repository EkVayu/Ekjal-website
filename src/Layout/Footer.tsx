import { Link } from "react-router-dom";
import {
  Instagram,
  Twitter,
  Linkedin,
  Github,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import logo from "../assets/logo.png";

const footerSections = [
  {
    title: "Products",
    links: [
      { title: "Overview", to: "/products/overview" },
      { title: "Solutions", to: "/products/solutions" },
      { title: "Pricing", to: "/products/pricing" },
      { title: "Customers", to: "/products/customers" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About", to: "/about-us" },
      { title: "Investor Relations", to: "/investor-relations" },
      { title: "Jobs", to: "/jobs" },
    ],
  },
  {
    title: "Support",
    links: [
      { title: "Contact", to: "/contact-us" },
      { title: "Documentation", to: "/documentation" },
      { title: "Chat", to: "/chat" },
      { title: "FAQ", to: "/faq" },
    ],
  },
  {
    title: "Legal",
    links: [
      { title: "Terms of Service", to: "/terms-of-service" },
      { title: "Privacy Policy", to: "/privacy-policy" },
      { title: "Cookie settings", to: "/cookie-settings" },
    ],
  },
];

const socialIcons = [
  { Icon: Instagram, href: "/" },
  { Icon: Twitter, href: "/" },
  { Icon: Linkedin, href: "/" },
  { Icon: Github, href: "/" },
];

function Footer() {
  return (
    <footer>
      <div className="pb-16 px-3 lg:px-20">
        <div className="w-full">
          <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-6 lg:gap-8 lg:pt-12">
            <div className="col-span-full lg:col-span-2">
              <div className="mb-4 lg:-mt-2">
                <Link to="/" className="flex items-center space-x-2">
                  <img src={logo} className="h-8 rounded-sm" alt="Ekjal logo" />
                  <span className="text-2xl font-semibold text-primary">
                    Ekjal
                  </span>
                </Link>
              </div>
              <p className="text-gray-500 mb-4">
              Bridging the cybersecurity skills gap, fostering innovation, and enhancing resilience are at the forefront of our strategic initiatives at Ekjal
              </p>
              <div className="flex flex-col space-y-2 text-gray-500">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-primary" />
                  <span>+91 98731 34795</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-primary" />
                  <span>pravin@ekjal.com</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-7 w-7 mr-2 mt-1 text-primary" />
                  <span>
                    JSS Science & Tech Entrepreneurs Park (STEP) C-20/I, Sector
                    62, NOIDA - 201301, UP
                  </span>
                </div>
              </div>
            </div>

            {footerSections.map((section, index) => (
              <div key={index}>
                <div className="mb-4 font-bold uppercase tracking-widest text-primary">
                  {section.title}
                </div>
                <nav className="flex flex-col gap-4">
                  {section.links.map((link, linkIndex) => (
                    <div key={linkIndex}>
                      <Link
                        to={link.to}
                        className="text-foreground/50 transition duration-100 hover:text-primary hover:font-bold active:text-primary"
                      >
                        {link.title}
                      </Link>
                    </div>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-secondary border-t border-foreground/20">
        <div className="px-3 lg:px-20">
          <div className="flex items-center justify-between gap-4 py-8">
            <span className="text-base text-primary font-bold">
              © 2024 - Present Ekjal. All rights reserved.
            </span>

            <div className="flex gap-4">
              {socialIcons.map(({ Icon, href }, index) => (
                <Link
                  key={index}
                  to={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary transition duration-100 hover:text-primary/80"
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
