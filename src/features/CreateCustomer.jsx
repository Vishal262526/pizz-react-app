import { useState } from "react";
import Button from "../ui/Button";
import { updateName } from "./user/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const CreateCustomer = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit is working");
    if (!name) return;
    dispatch(updateName(name));
    navigate("/menu");
  };

  return (
    <form onSubmit={handleSubmit} className="text-center ">
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
      {name && <Button type="submit">Start Ordering</Button>}
    </form>
  );
};

export default CreateCustomer;
