// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import CreateCustomer from "../features/CreateCustomer";
// import { useEffect } from "react";

const Home = () => {
  // const { username } = useSelector((state) => state.user);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (username) navigate("/menu");
  // }, [username, navigate]);

  return (
    <div className="p-5">
      <h1 className="mb-8 text-center text-xl font-semibold text-stone-700 md:text-3xl">
        The Best Pizza <br />{" "}
        <span className="text-primary">
          Straight out of the oven, straight to you
        </span>
      </h1>

      <CreateCustomer />
    </div>
  );
};

export default Home;
