import PropTypes from "prop-types";
import Button from "../../ui/Button";

const MenuItem = ({ pizza }) => {
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
        <p className="text-md font-light">{ingredients.join(", ")}</p>
        <div className="mt-auto flex  items-center justify-between gap-3  text-sm font-bold">
          {!soldOut ? (
            <p>${unitPrice}</p>
          ) : (
            <p className="uppercase">Sold Out</p>
          )}
          <div className="me-2">
            <Button>Add to Cart</Button>
          </div>
        </div>
      </div>
    </li>
  );
};

MenuItem.propTypes = {
  pizza: PropTypes.object.isRequired,
};

export default MenuItem;
