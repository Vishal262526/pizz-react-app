import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiResturant";
import MenuItem from "./MenuItem";

const Menu = () => {
  const menu = useLoaderData();

  console.log(menu);

  return (
    <div className="">
      <ul className="divide-y divide-primary sm:grid sm:grid-cols-2 sm:divide-none lg:grid-cols-3">
        {menu.map((pizza) => (
          <MenuItem key={pizza.id} pizza={pizza} />
        ))}
      </ul>
    </div>
  );
};

export const loader = async () => {
  const menu = await getMenu();

  console.log("menu is ", menu);
  return menu;
};

export default Menu;
