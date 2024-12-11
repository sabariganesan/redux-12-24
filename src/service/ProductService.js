import { updateProducts } from "../reducer/productReducer";

const getProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const reponseData = await response.json();
    return reponseData;
  } catch (error) {
    console.log(error);
  }
};

export { getProducts };
