import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiResturant";
import MenuItem from "./MenuItem";

const Menu = () => {
  const menu = useLoaderData();

  console.log(menu);

  return (
    <div>
      <ul>
        {menu.map((pizza) => (
          <MenuItem key={pizza.id} pizza={pizza} />
        ))}
      </ul>
    </div>
  );
};

export const loader = async () => {
  const menu = await getMenu();
  return menu;
};

export default Menu;
