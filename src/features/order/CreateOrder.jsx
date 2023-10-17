import { Form } from "react-router-dom";
import { createOrder } from "../../services/apiResturant";

const faekCart = [
  {
    pizzaId: 12,
    name: "Pizza 12",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Pizza 6",
    quantity: 4,
    unitPrice: 8,
    totalPrice: 23,
  },
];

const CreateOrder = () => {
  const cart = faekCart;
  console.log(cart);

  return (
    <Form method="POST">
      <div>
        <label htmlFor="fullname">Full Name</label>
        <input id="fullname" type="text" name="customer " required />
      </div>
      <div>
        <label htmlFor="phone">Phone Number</label>
        <input id="phone" type="tel" name="phone " required />
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <input id="address" type="text" name="address" required />
      </div>
      <div>
        <label htmlFor="address">Priority</label>
        <input type="checkbox" name="priority" id="priority" required />
      </div>
      <div>
        {/* <button</button> */}
        <input type="hidden" name="cart" value={JSON.stringify(cart)} />
        <button>Order Now</button>
      </div>
    </Form>
  );
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  console.log("In Order ");

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };

  const newOrder = await createOrder(order);
  console.log("Order is ");
  console.log(newOrder);

  return null;
};

export default CreateOrder;
