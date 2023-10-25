import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const LinkButton = ({ children, to }) => {
  return (
    <Link className="text-sm font-bold text-[blue]" to={to}>
      {children}
    </Link>
  );
};

LinkButton.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.node.isRequired,
};

export default LinkButton;
