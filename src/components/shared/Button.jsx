import PropTypes from "prop-types";
import { forwardRef } from "react";

const Button = forwardRef(
  (
    { children, variant = "primary", size = "md", className = "", ...props },
    ref
  ) => {
    const baseStyles = "rounded-lg font-medium transition-colors duration-200";

    const variants = {
      primary: "bg-primary text-dark-darker hover:bg-opacity-90",
      secondary: "bg-dark-lighter text-light hover:bg-opacity-90",
      outline:
        "border-2 border-primary text-primary hover:bg-primary hover:text-dark-darker",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3",
      lg: "px-8 py-4 text-lg",
    };

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "outline"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  className: PropTypes.string,
};

Button.displayName = "Button";

export default Button;
