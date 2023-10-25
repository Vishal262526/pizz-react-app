import Button from "../../ui/Button";
import LinkButton from "../../ui/LinkButton";
import CartItem from "./CartItem";

const cart = [
  {
    id: 1,
    name: "Margherita",
    unitPrice: 12,
    imageUrl:
      "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-1.jpg",
    ingredients: ["tomato", "mozzarella", "basil"],
    soldOut: false,
  },
  {
    id: 2,
    name: "Capricciosa",
    unitPrice: 14,
    imageUrl:
      "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-2.jpg",
    ingredients: ["tomato", "mozzarella", "ham", "mushrooms", "artichoke"],
    soldOut: true,
  },
  {
    id: 3,
    name: "Romana",
    unitPrice: 15,
    imageUrl:
      "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-3.jpg",
    ingredients: ["tomato", "mozzarella", "prosciutto"],
    soldOut: false,
  },
  {
    id: 4,
    name: "Prosciutto e Rucola",
    unitPrice: 16,
    imageUrl:
      "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-4.jpg",
    ingredients: ["tomato", "mozzarella", "prosciutto", "arugula"],
    soldOut: false,
  },
];

const Cart = () => {
  return (
    <div className="px-4 py-3">
      <LinkButton to={"/menu"}>&larr; Go to Menu</LinkButton>
      <h2 className="mt-7 text-xl font-semibold">
        You Cart, <span className="font-bold">%NAME%</span>
      </h2>

      <ul className="mt-3 divide-y divide-primary border-b border-primary">
        {cart.map((cartItem) => (
          <CartItem
            key={cartItem.id}
            name={cartItem.name}
            quantity={2}
            totalPrice={cartItem.unitPrice}
          />
        ))}
      </ul>

      <div className="mt-6 space-x-4">
        <Button to="/order/new">Order Pizza</Button>
        <button className="font-bold">clear cart</button>
      </div>
    </div>
  );
};

export default Cart;
