import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalPizzaQuantity, getTotalPrice } from "./cartSlice";

const CartOverview = () => {
  const totalPizza = useSelector(getTotalPizzaQuantity);

  const totalPrice = useSelector(getTotalPrice);

  return (
    <div className="flex justify-between bg-secondary px-4 py-6 text-sm text-white sm:px-6 sm:text-xl">
      <p className="">
        <span>{totalPizza} Pizzas </span>
        <span className="ml-2"> ${totalPrice}</span>
      </p>
      <Link to="/cart">Open Cart &rarr;</Link>
    </div>
  );
};

export default CartOverview;
