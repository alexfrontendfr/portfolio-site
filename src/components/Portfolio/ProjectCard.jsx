import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-dark-lighter rounded-xl overflow-hidden group"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full text-dark hover:bg-primary transition-colors"
            >
              <Github size={20} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full text-dark hover:bg-primary transition-colors"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-medium mb-2">{project.title}</h3>
        <p className="text-light-muted text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-dark rounded-full text-xs text-light-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    github: PropTypes.string,
    live: PropTypes.string,
    tech: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default ProjectCard;
