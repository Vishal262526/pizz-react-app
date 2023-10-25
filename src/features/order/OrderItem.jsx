import PropTypes from "prop-types";

const OrderItem = ({ item }) => {
  const { quantity, name, unitPrice } = item;

  return (
    <li className="py-3">
      <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">${unitPrice}</p>
      </div>
    </li>
  );
};

OrderItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default OrderItem;
