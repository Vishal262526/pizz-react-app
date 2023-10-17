import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";

const AppLayout = () => {
  const { state } = useNavigation();
  let isLoading = state === "loading";

  return (
    <div className="layout">
      <Header />

      <main>{isLoading ? <p>Loading....</p> : <Outlet />}</main>

      <CartOverview />
    </div>
  );
};

export default AppLayout;
