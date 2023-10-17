import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiResturant";
import { calcMinuteLeft, formatCurrency, formatDate } from "../../utils/helper";

const Order = () => {
  const {
    // id,
    status,
    priority,
    priorityPrice,
    orderPice,
    estimateDelivery,
    // cart,
  } = useLoaderData();

  const deliveryIn = calcMinuteLeft(estimateDelivery);

  return (
    <div>
      <div>
        <h2>Status </h2>
        <div>
          {priority && <span>Priority </span>}
          <span>{status} Order</span>
        </div>
      </div>

      <div>
        <p>
          {deliveryIn >= 0
            ? `Only ${calcMinuteLeft(estimateDelivery)}`
            : "Order should have arrived"}
        </p>

        <p>Estimated Delivery : {formatDate(estimateDelivery)}</p>
      </div>

      <div>
        <p>Price Pizza : {formatCurrency(orderPice)}</p>
        {priority && <p>Pricing Priority: {formatCurrency(priorityPrice)}</p>}
        <p>To pay on delivery {formatCurrency(orderPice + priorityPrice)}</p>
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
