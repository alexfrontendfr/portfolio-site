import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Section = ({ children, title, subtitle, className = "" }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${className}`}
    >
      {title && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">{title}</h2>
          {subtitle && <p className="text-light-muted">{subtitle}</p>}
        </div>
      )}
      {children}
    </motion.section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  className: PropTypes.string,
};

export default Section;
