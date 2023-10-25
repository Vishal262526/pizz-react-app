import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiResturant";
import { calcMinuteLeft, formatCurrency, formatDate } from "../../utils/helper";
import OrderItem from "./OrderItem";

const Order = () => {
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPice,
    estimateDelivery,
    cart,
  } = useLoaderData();

  const deliveryIn = calcMinuteLeft(estimateDelivery);

  return (
    <div className="space-y-8 px-4 py-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">
          Order #{id} {status}
        </h2>
        <div className="space-x-2">
          {priority && (
            <span className="bg-red-500 text-red-50 rounded-full px-3 py-1 text-sm font-semibold uppercase tracking-wide">
              Priority{" "}
            </span>
          )}
          <span className="bg-green-500 text-green-50 rounded-full px-3 py-1 text-sm font-semibold uppercase tracking-wide">
            {status} Order
          </span>
        </div>
      </div>

      <div className="bg-stone-100  flex flex-wrap items-center justify-between gap-2 px-6 py-5">
        <p className="font-medium">
          {deliveryIn >= 0
            ? `Only ${calcMinuteLeft(estimateDelivery)}`
            : "Order should have arrived"}
        </p>

        <p className="text-stone-500 text-xs">
          Estimated Delivery : {formatDate(estimateDelivery)}
        </p>
      </div>

      <ul className="divide-stron-200 divide-y border-b border-t">
        {cart.map((orderItem) => (
          <OrderItem key={orderItem.id} item={orderItem} />
        ))}
      </ul>

      <div className="bg-stone-100 space-y-2 px-6 py-5">
        <p className="text-stone-600 text-sm font-medium">
          Price Pizza : {formatCurrency(orderPice)}
        </p>
        {priority && (
          <p className="text-stone-600 text-sm font-medium">
            Pricing Priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="font-bold">
          To pay on delivery {formatCurrency(orderPice + priorityPrice)}
        </p>
      </div>
    </div>
  );
};

export const loader = async ({ params }) => {
  console.log(params.orderId);
  const order = await getOrder(params.orderId);
  return order;
};

export default Order;
