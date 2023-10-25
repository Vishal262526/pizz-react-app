import { useState } from "react";
import Button from "../ui/Button";

const CreateCustomer = () => {
  const [name, setName] = useState("");

  return (
    <div className="text-center ">
      <p className="mb-3 text-xl font-bold">
        Welcome! Please Start by telling us your name
      </p>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="input mb-4"
        type="text"
        placeholder="Enter your Name...."
      />
      <br />
      {name && <Button to={"/menu"}>Start Ordering</Button>}
    </div>
  );
};

export default CreateCustomer;
