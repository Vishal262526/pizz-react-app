import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItemQuantity,
  getItemQuantityById,
  increaseItemQuantity,
} from "./cartSlice";

const UpdateCartItemQuantity = ({ pizzaId }) => {
  const currentQuantity = useSelector(getItemQuantityById(pizzaId));
  const dispatch = useDispatch();
  const handleDecreaseItemQuantity = () => {
    dispatch(decreaseItemQuantity(pizzaId));
  };

  const handleIncreaseItemQuantity = () => {
    dispatch(increaseItemQuantity(pizzaId));
  };
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={handleDecreaseItemQuantity}
        className="text-md rounded-md bg-primary px-4 py-2  "
      >
        -
      </button>
      <p className="text-sm font-medium">{currentQuantity}</p>
      <button
        onClick={handleIncreaseItemQuantity}
        className="text-md rounded-md bg-primary px-4 py-2  "
      >
        +
      </button>{" "}
    </div>
  );
};

UpdateCartItemQuantity.propTypes = {
  pizzaId: PropTypes.node.isRequired,
};

export default UpdateCartItemQuantity;
