import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import LinkButton from "../../ui/LinkButton";
import CartItem from "./CartItem";
import { clearCart, getCart } from "./cartSlice";
import { getUsername } from "../user/userSlice";

const Cart = () => {
  const cart = useSelector(getCart);
  const username = useSelector(getUsername);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="px-4 py-3">
      <LinkButton to={"/menu"}>&larr; Go to Menu</LinkButton>
      <h2 className="mt-7 text-xl font-semibold">
        You Cart, <span className="font-bold">{username}</span>
      </h2>

      <ul className="mt-3 divide-y divide-primary border-b border-primary">
        {cart.map((cartItem) => (
          <CartItem
            key={cartItem.pizzaId}
            id={cartItem.pizzaId}
            name={cartItem.name}
            quantity={cartItem.quantity}
            totalPrice={cartItem.totalPrice}
          />
        ))}
      </ul>

      {cart.length > 0 && (
        <div className="mt-6 space-x-4">
          <Button to="/order/new">Order Pizza</Button>
          <button onClick={handleClearCart} className="font-bold">
            clear cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
