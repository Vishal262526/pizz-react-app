import PropTypes from "prop-types";
import DeleteCartItemButton from "./DeleteCartItemButton";
import UpdateCartItemQuantity from "./UpdateCartItemQuantity";

const CartItem = ({ id, name, quantity, totalPrice }) => {
  return (
    <li className="items-center justify-between py-3 sm:flex">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex  items-center justify-between sm:gap-5">
        <p className="text-sm font-bold">${totalPrice}.00</p>
        {/* <Button onClick={handleDeleteCartItem}>Delete Item</Button> */}
        <div className="items-cetner nd:gap-4 flex gap-2">
          <UpdateCartItemQuantity pizzaId={id} />
          <DeleteCartItemButton pizzaId={id} />
        </div>
      </div>
    </li>
  );
};

CartItem.propTypes = {
  name: PropTypes.node.isRequired,
  quantity: PropTypes.node.isRequired,
  id: PropTypes.node.isRequired,
  totalPrice: PropTypes.node.isRequired,
};

export default CartItem;
