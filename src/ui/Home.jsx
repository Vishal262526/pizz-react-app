import CreateCustomer from "../features/CreateCustomer";

const Home = () => {
  return (
    <div className="p-5">
      <h1 className="text-stone-700 mb-8 text-center text-xl font-semibold md:text-3xl">
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
