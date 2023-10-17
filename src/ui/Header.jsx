import { Link } from "react-router-dom";
import Searchorder from "../features/order/Searchorder";

const Header = () => {
  return (
    <header>
      <Link to="/">Fast React Pizza</Link>
      <Searchorder />
      <p>Vishal</p>
    </header>
  );
};

export default Header;
