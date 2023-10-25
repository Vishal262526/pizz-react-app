import PropTypes from "prop-types";
import Button from "../../ui/Button";

const CartItem = ({ name, quantity, totalPrice }) => {
  return (
    <li className="items-center justify-between py-3 sm:flex">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex  items-center justify-between sm:gap-5">
        <p className="text-sm font-bold">${totalPrice}.00</p>
        <Button>Delete Item</Button>
      </div>
    </li>
  );
};

CartItem.propTypes = {
  name: PropTypes.node.isRequired,
  quantity: PropTypes.node.isRequired,
  totalPrice: PropTypes.node.isRequired,
};

export default CartItem;
