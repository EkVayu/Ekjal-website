import { Button } from "../components/ui/button";
import { useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../components/ui/navigation-menu";
import { ChevronDown, Menu, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-removebg.png";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";

const navItems = [
  { name: "Products", link: "/products" },
  { name: "About Us", link: "/about-us" },
  { name: "Jobs", link: "/jobs" },
];

const offeringItems = [
  { name: "Phishing Prevention Tool", link: "/phishing-prevention-tool" },
  { name: "Decission Support System", link: "/decission-support-system" },
  { name: "Enterprise security", link: "/enterprise-security" },
  { name: "Automotive cyber security", link: "/automotive-cyber-security" },
  { name: "Virtual CISO", link: "/virtual-ciso" },
  { name: "Audit, Compliance & Training", link: "/audit-compliance-training" },
  { name: "VAPT services", link: "/vapt-services" },
  { name: "Outcome-Driven Metrics (ODM)", link: "/outcome-driven-metrics-odm" },
];

function Header() {
  const location = useLocation();

  return (
    <header className="w-full px-3 lg:px-20">
      <Sheet>
        <div className="container flex items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} className="h-8 rounded-sm" alt="Ekjal logo" />
            <span className="text-2xl font-semibold">Ekjal</span>
          </Link>

          <nav className="hidden md:flex space-x-10">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className={`px-3 py-2 hover:underline hover:text-primary rounded-md bg-transparent font-normal tracking-wider uppercase ${
                      location.pathname === "/products"
                        ? "text-primary underline"
                        : "text-foreground"
                    }`}
                    asChild
                  >
                    <Link to={"/products"}>Products</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`hover:text-primary font-normal bg-transparent text-base uppercase ${
                      offeringItems.some(
                        (item) => location.pathname === item.link
                      )
                        ? "text-primary underline"
                        : "text-foreground"
                    }`}
                  >
                    Offerings
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-2 p-4 w-[400px]">
                      {offeringItems.map((item, index) => (
                        <NavigationMenuLink
                          key={index}
                          className={`block px-3 py-2 rounded-md ${
                            location.pathname === item.link
                              ? "bg-primary text-white"
                              : "hover:bg-primary hover:text-white"
                          }`}
                          asChild
                        >
                          <Link to={item.link}>{item.name}</Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className={`px-3 py-2 hover:underline hover:text-primary rounded-md bg-transparent font-normal tracking-wider uppercase ${
                      location.pathname === "/jobs"
                        ? "text-primary underline"
                        : "text-foreground"
                    }`}
                    asChild
                  >
                    <Link to={"/jobs"}>Jobs</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className={`px-3 py-2 hover:underline hover:text-primary rounded-md bg-transparent font-normal tracking-wider uppercase ${
                      location.pathname === "/about-us"
                        ? "text-primary underline"
                        : "text-foreground"
                    }`}
                    asChild
                  >
                    <Link to={"/about-us"}>About Us</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="default" asChild className="hidden md:flex">
              <Link to="/contact-us">
                <Phone className="h-4 w-4 mr-2" />
                <span>Contact Us</span>
              </Link>
            </Button>
            <SheetTrigger className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </SheetTrigger>
          </div>

          <SheetContent className="flex flex-col bg-background">
            <SheetHeader className="border-b pb-4 mb-4">
              <SheetTitle className="text-2xl font-bold">Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex-grow">
              {navItems.map((item, index) => (
                <SheetClose asChild key={index}>
                  <Link
                    to={item.link}
                    className={`block p-2 rounded-md text-lg font-medium hover:bg-primary hover:text-secondary transition-colors ${
                      location.pathname === item.link
                        ? "text-primary"
                        : "text-foreground"
                    }`}
                  >
                    {item.name}
                  </Link>
                </SheetClose>
              ))}
              <DropdownMenu>
                <DropdownMenuTrigger className="w-full text-left p-2 text-lg font-medium hover:bg-primary hover:text-secondary transition-colors flex items-center justify-between">
                  Offerings <ChevronDown className="w-5 h-5" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full">
                  {offeringItems.map((item, index) => (
                    <DropdownMenuItem
                      key={index}
                      className="py-2 hover:bg-primary hover:text-secondary"
                    >
                      <SheetClose asChild>
                        <Link to={item.link} className="w-full block">
                          {item.name}
                        </Link>
                      </SheetClose>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>
            <SheetClose asChild>
              <Button variant="default" className="mt-6" asChild>
                <Link to="/contact-us" className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>Contact Us</span>
                </Link>
              </Button>
            </SheetClose>
          </SheetContent>
        </div>
      </Sheet>
    </header>
  );
}

export default Header;
