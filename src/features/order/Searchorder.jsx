import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Searchorder = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="w-42 rounded-full border-none px-4 py-2 text-sm outline-none transition-all duration-300 sm:w-40 sm:px-4 sm:py-2 sm:focus:w-72"
        type="text"
        placeholder="Search Order Number"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
};

export default Searchorder;
