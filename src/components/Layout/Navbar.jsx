import PropTypes from "prop-types";
import { Menu, X } from "lucide-react";

const Navbar = ({ isOpen, setIsOpen }) => {
  const navItems = ["About", "Portfolio", "Resume", "Blog", "Contact"];

  return (
    <nav className="lg:hidden mb-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-medium">Alex Iulian</h1>
        <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-primary">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="mt-4 py-4 border-t border-dark-lighter">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item}>
                <button
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className="w-full px-4 py-2 text-left rounded-lg hover:bg-dark-lighter transition-colors"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default Navbar;
