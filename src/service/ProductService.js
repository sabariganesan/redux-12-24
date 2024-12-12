import {
  updateProducts,
  updateProductsError,
  updateProductsLoader,
} from "../reducer/productReducer";

const getProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const reponseData = await response.json();
  return reponseData;
};

const getProductsThunk = () => async (dispatch) => {
  try {
    dispatch(updateProductsLoader(true));
    const response = await fetch("https://fakestoreapi.com/products");
    const reponseData = await response.json();
    dispatch(updateProducts(reponseData));
  } catch (error) {
    console.error(error, "error");
    dispatch(updateProductsError(error.message || "Something went wrong"));
  } finally {
    dispatch(updateProductsLoader(false));
  }
};

export { getProducts, getProductsThunk };
