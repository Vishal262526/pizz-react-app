import { Link } from "react-router-dom";
import Searchorder from "../features/order/Searchorder";
import { useSelector } from "react-redux";

const Header = () => {
  const { username } = useSelector((state) => state.user);

  return (
    <header className="flex items-center  justify-between bg-primary px-4 py-4 sm:justify-around sm:px-6">
      <Link
        className="text-white-900 text-md font-bold
       uppercase text-white sm:text-2xl"
        to="/"
      >
        PizzaHub
      </Link>
      <Searchorder />
      <p className="hidden md:block">{username}</p>
    </header>
  );
};

export default Header;
