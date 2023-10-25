import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Button = ({ children, to }) => {
  if (to)
    return (
      <Link className="rounded-xl bg-primary px-4 py-2 font-bold " to={to}>
        {children}
      </Link>
    );

  return (
    <button className="rounded-xl bg-primary px-4 py-2 font-bold">
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.node,
};

export default Button;
