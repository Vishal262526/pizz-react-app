import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";
import Button from "../../ui/Button";

const DeleteCartItemButton = ({ pizzaId }) => {
  const dispatch = useDispatch();
  const handleDeleteCartItem = () => {
    dispatch(deleteItem(pizzaId));
  };

  return <Button onClick={handleDeleteCartItem}>Delete Item</Button>;
};

DeleteCartItemButton.propTypes = {
  pizzaId: PropTypes.node.isRequired,
};

export default DeleteCartItemButton;
