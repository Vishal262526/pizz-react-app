// const BASE_URL = "https://react-fast-pizza-api.onrender.com/api";
const BASE_URL = "http://192.168.29.86:8080";

export const getMenu = async () => {
  const res = await fetch(`${BASE_URL}/menu`);
  if (!res.ok) throw new Error("Failed getting Menu");
  const data = await res.json();
  return data;
};

export const getOrder = async (id) => {
  const res = await fetch(`${BASE_URL}/order/${id}`);
  if (!res.ok) throw new Error(`Couldn't find order #${id}`);

  const data = await res.json();
  console.log(`Order is : ${id}`);
  // const newData = { ...data, cart: JSON.parse(data.cart) };

  console.log(data);

  return data;
};

export const createOrder = async (newOrder) => {
  console.log(newOrder);
  try {
    const res = await fetch(`${BASE_URL}/order/new`, {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) throw new Error(`Couldn't place your order server error`);
    console.log("res is .....", res);
    const { id } = await res.json();
    console.log("order id is ....", id);
    return id;
  } catch (e) {
    console.log(e.message);
  }
};
