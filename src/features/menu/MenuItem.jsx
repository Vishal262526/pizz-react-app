import PropTypes from "prop-types";
import Button from "../../ui/Button";

import { addItem, getItemQuantityById } from "../cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import DeleteCartItemButton from "../cart/DeleteCartItemButton";
import UpdateCartItemQuantity from "../cart/UpdateCartItemQuantity";
// import DeleteCartItemButton from "../cart/DeleteCartItemButton";

const MenuItem = ({ pizza }) => {
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getItemQuantityById(pizza.id));

  const isInCart = currentQuantity > 0;

  const handleAddToCart = () => {
    const item = {
      pizzaId: pizza.id,
      name: pizza.name,
      unitPrice: pizza.unitPrice,
      quantity: 1,
      totalPrice: unitPrice,
    };
    dispatch(addItem(item));
    console.log(pizza.name, currentQuantity);
  };

  const { name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  return (
    <li className="flex  cursor-pointer gap-5 rounded-md py-2 hover:bg-[#f1f1f1]">
      <img
        className={`ms-2 h-24 w-24 rounded-xl ${
          soldOut && "opacity-70 grayscale"
        }`}
        src={imageUrl}
        alt={name}
      />
      <div className="flex grow flex-col">
        <p className=" text-2xl font-bold">{name}</p>
        <p className="text-md font-light">{ingredients}</p>
        <div className="mt-auto flex  items-center justify-between gap-3  text-sm font-bold">
          {!soldOut ? (
            <p>${unitPrice}</p>
          ) : (
            <p className="uppercase">Sold Out</p>
          )}

          {isInCart && (
            <div className="flex items-center gap-2">
              <UpdateCartItemQuantity pizzaId={pizza.id} />
              <DeleteCartItemButton pizzaId={pizza.id} />
            </div>
          )}

          {!soldOut && !isInCart && (
            <div className="me-2">
              <Button onClick={handleAddToCart}>Add to Cart</Button>
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

MenuItem.propTypes = {
  pizza: PropTypes.object.isRequired,
};

export default MenuItem;
