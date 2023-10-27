import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Button = ({ children, to, type, onClick }) => {
  if (to)
    return (
      <Link
        type={type}
        className="rounded-xl bg-primary px-4 py-2 font-bold "
        to={to}
      >
        {children}
      </Link>
    );

  if (onClick) {
    return (
      <button
        onClick={onClick}
        className="rounded-xl bg-primary px-4 py-2 font-bold"
      >
        {children}
      </button>
    );
  }

  return (
    <button className="rounded-xl bg-primary px-4 py-2 font-bold">
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.node,
  onClick: PropTypes.func,
  type: PropTypes.node,
};

export default Button;
