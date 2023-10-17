import PropTypes from "prop-types";

const MenuItem = ({ pizza }) => {
  const { name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  return (
    <li>
      <img src={imageUrl} alt={name} />
      <div>
        <p>{name}</p>
        <p>{ingredients}</p>
        <div>{!soldOut ? <p>{unitPrice}</p> : <p>Sold Out</p>}</div>
      </div>
    </li>
  );
};

MenuItem.propTypes = {
  pizza: PropTypes.object.isRequired,
};

export default MenuItem;
