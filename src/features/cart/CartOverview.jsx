import { Link } from "react-router-dom";

const CartOverview = () => {
  return (
    <div>
      <p>
        <span>23 Pizza</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open Cart</Link>
    </div>
  );
};

export default CartOverview;
