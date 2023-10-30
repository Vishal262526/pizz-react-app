import { Form } from "react-router-dom";
import { createOrder } from "../../services/apiResturant";
import { useSelector } from "react-redux";
import { getCart } from "../cart/cartSlice";
const CreateOrder = () => {
  const cart = useSelector(getCart);
  const { username } = useSelector((state) => state.user);

  return (
    <div className="mx-auto max-w-[700px] px-4 py-6">
      <h2 className=" mb-8 text-xl font-semibold">
        Ready to order let&apos;s go!
      </h2>
      <Form method="POST">
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center">
          <label className="sm:basis-40" htmlFor="fullname">
            Full Name
          </label>
          <input
            className="input grow"
            id="fullname"
            defaultValue={username}
            type="text"
            name="customer"
            required
          />
        </div>
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center">
          <label className="sm:basis-40" htmlFor="phone">
            Phone Number
          </label>
          <input
            className="input grow"
            id="phone"
            type="tel"
            name="phone "
            required
          />
        </div>
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center">
          <label className="sm:basis-40" htmlFor="address">
            Address
          </label>
          <input
            className="input grow"
            id="address"
            type="text"
            name="address"
            required
          />
        </div>
        <div className="mb-5 flex items-center ">
          <input
            className="h-5 w-5 accent-primary"
            type="checkbox"
            name="priority"
            id="priority"
            required
          />
          <label className="ms-2" htmlFor="address">
            Do you want to give your order priority?
          </label>
        </div>
        <div className="mb-5">
          {/* <button</button> */}
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <button className="fontw-bold rounded-xl bg-primary px-4 py-2 text-white">
            Order Now
          </button>
        </div>
      </Form>
    </div>
  );
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  console.log("In Order ");

  const order = {
    ...data,
    priority: data.priority === "on",
  };

  console.log("Order is ... ", order);

  const newOrder = await createOrder(order);
  console.log("Order is ");
  console.log(newOrder);

  return null;
};

export default CreateOrder;
