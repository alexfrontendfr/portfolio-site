import PropTypes from "prop-types";
import { Github, Linkedin, Globe } from "lucide-react";

const socialLinks = [
  {
    icon: <Github size={20} />,
    url: "https://github.com/alexfrontendfr",
    label: "GitHub",
  },
  {
    icon: <Linkedin size={20} />,
    url: "https://linkedin.com/in/alex-iulian-dev",
    label: "LinkedIn",
  },
  {
    icon: <Globe size={20} />,
    url: "https://alexfolio.nl",
    label: "Portfolio",
  },
];

const SocialLinks = ({ className = "" }) => {
  return (
    <div className={`flex gap-4 ${className}`}>
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-dark-lighter rounded-lg hover:bg-opacity-80 transition-colors"
          aria-label={link.label}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

SocialLinks.propTypes = {
  className: PropTypes.string,
};

export default SocialLinks;
