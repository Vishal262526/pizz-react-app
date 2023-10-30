import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiResturant";
// import { formatCurrency } from "../../utils/helper";
import OrderItem from "./OrderItem";

const Order = () => {
  const {
    id,
    orderStatus,
    priority,
    // priorityPrice,
    // orderPice,
    // estimateDelivery,
    cart,
  } = useLoaderData();

  // const deliveryIn = calcMinuteLeft(estimateDelivery);

  return (
    <div className="space-y-8 px-4 py-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">
          Order #{id} {orderStatus}
        </h2>
        <div className="space-x-2">
          {priority && (
            <span className="rounded-full bg-red-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-red-50">
              Priority{" "}
            </span>
          )}
          <span className="rounded-full bg-green-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-green-50">
            {status} Order
          </span>
        </div>
      </div>

      <div className="flex  flex-wrap items-center justify-between gap-2 bg-stone-100 px-6 py-5">
        {/* <p className="font-medium">
          {deliveryIn >= 0
            ? `Only ${calcMinuteLeft(estimateDelivery)}`
            : "Order should have arrived"}
        </p> */}

        {/* <p className="text-xs text-stone-500">
          Estimated Delivery : {formatDate(estimateDelivery)}
        </p> */}
      </div>

      <ul className="divide-stron-200 divide-y border-b border-t">
        {cart.map((orderItem) => (
          <OrderItem key={orderItem.id} item={orderItem} />
        ))}
      </ul>

      <div className="space-y-2 bg-stone-100 px-6 py-5">
        {/* <p className="text-sm font-medium text-stone-600">
          Price Pizza : {formatCurrency(orderPice)}
        </p> */}
        {/* {priority && (
          // <p className="text-sm font-medium text-stone-600">
          //   Pricing Priority: {formatCurrency(priorityPrice)}
          // </p>
        )} */}
        {/* <p className="font-bold">
          To pay on delivery {formatCurrency(orderPice + priorityPrice)}
        </p> */}
      </div>
    </div>
  );
};

export const loader = async ({ params }) => {
  const order = await getOrder(params.orderId);
  return order;
};

export default Order;
