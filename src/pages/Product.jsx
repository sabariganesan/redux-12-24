import React, { useEffect } from "react";
import ProductHeader from "../component/Product/ProductHeader";
import ProductTable from "../component/Product/table/ProductTable";
import { useDispatch } from "react-redux";
import {
  getProducts,
  getProductsAsyncThunk,
  getProductsThunk,
} from "../service/ProductService";

function Product() {
  const dispatch = useDispatch();

  const fetchProduct = async () => {
    // with out thunk
    // try {
    //   dispatch(updateProductsLoader(true));
    //   const data = await getProducts();
    //   dispatch(updateProducts(data));
    // } catch (error) {
    //   console.error(error, "error");
    //   dispatch(updateProductsError(error.message || "Something went wrong"));
    // } finally {
    //   dispatch(updateProductsLoader(false));
    // }

    // using thunk
    // dispatch(getProductsThunk());

    // using async thunk

    dispatch(getProductsAsyncThunk());
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <main>
      <ProductHeader />
      <ProductTable />
    </main>
  );
}

export default Product;
