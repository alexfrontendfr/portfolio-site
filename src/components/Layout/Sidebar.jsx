import PropTypes from "prop-types";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Menu,
  X,
  Github,
  Linkedin,
  Globe,
} from "lucide-react";

const Sidebar = ({ activePage, onPageChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const contactInfo = [
    { icon: <Mail />, label: "Email", value: "contactalexfr@gmail.com" },
    { icon: <Phone />, label: "Phone", value: "+41782122716" },
    { icon: <MapPin />, label: "Location", value: "Monthey, Suisse" },
    { icon: <Calendar />, label: "Available", value: "Immediately" },
  ];

  const socialLinks = [
    { icon: <Github />, url: "https://github.com/alexfrontendfr" },
    { icon: <Globe />, url: "https://alexfolio.nl" },
    { icon: <Linkedin />, url: "https://linkedin.com/in/alex-iulian-dev" },
  ];

  const navItems = ["About", "Portfolio", "Resume", "Contact"];

  const handleNavigation = (page) => {
    onPageChange(page.toLowerCase());
    setIsOpen(false); // Close mobile menu after navigation
  };

  return (
    <aside
      className={`
        lg:sticky lg:top-6 bg-[#131313] rounded-3xl p-6 
        transition-all duration-300 ease-in-out
        ${isOpen ? "h-auto" : "h-[140px] lg:h-auto"}
      `}
    >
      <div className="flex items-center gap-4 lg:flex-col lg:items-center">
        <div className="relative w-20 h-20 lg:w-32 lg:h-32">
          <img
            src="/portfolio-site/assets/images/bitmojiAlex.png"
            alt="Alex Iulian"
            className="w-full h-full rounded-2xl object-cover"
          />
        </div>

        <div className="text-center">
          <h1 className="text-xl font-medium mb-2">Alex Iulian</h1>
          <span className="px-4 py-1 bg-[#1c1c1c] rounded-lg text-sm">
            Frontend Engineer
          </span>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden absolute top-4 right-4 p-2 hover:bg-[#1c1c1c] rounded-lg transition-colors"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`
          mt-6 transition-all duration-300 ${
            isOpen ? "block" : "hidden lg:block"
          }
        `}
      >
        <div className="space-y-4">
          {contactInfo.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="p-2 bg-[#1c1c1c] rounded-lg">{item.icon}</div>
              <div>
                <p className="text-sm text-gray-400">{item.label}</p>
                <p className="text-sm">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        <hr className="my-6 border-[#1c1c1c]" />

        <div className="flex justify-center gap-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#1c1c1c] rounded-lg hover:bg-[#252525] transition-colors"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <nav className="mt-6 lg:block">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item}>
                <button
                  onClick={() => handleNavigation(item)}
                  className={`
                    w-full px-4 py-2 text-left rounded-lg transition-colors
                    ${
                      activePage === item.toLowerCase()
                        ? "bg-[#ffd700] text-black"
                        : "hover:bg-[#1c1c1c]"
                    }
                  `}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

Sidebar.propTypes = {
  activePage: PropTypes.string.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Sidebar;
