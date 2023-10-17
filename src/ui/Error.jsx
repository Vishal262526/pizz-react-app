import { useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <p>{error.data || error.message}</p>

      <button onClick={() => navigate(-1)}>&larr; Go Back</button>
    </div>
  );
};

export default Error;
