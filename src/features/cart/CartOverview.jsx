import { Link } from "react-router-dom";

const CartOverview = () => {
  return (
    <div className="flex justify-between bg-secondary px-4 py-6 text-sm text-white sm:px-6 sm:text-xl">
      <p className="">
        <span>23 Pizzas </span>
        <span className="ml-2"> $23.45</span>
      </p>
      <Link to="/cart">Open Cart &rarr;</Link>
    </div>
  );
};

export default CartOverview;
