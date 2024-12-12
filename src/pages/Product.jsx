import React, { useEffect, useState } from "react";
import ProductHeader from "../component/Product/ProductHeader";
import ProductTable from "../component/Product/table/ProductTable";
import { useDispatch } from "react-redux";
import {
  updateProducts,
  updateProductsError,
  updateProductsLoader,
} from "../reducer/productReducer";
import { getProducts, getProductsThunk } from "../service/ProductService";

function Product() {
  const dispatch = useDispatch();

  const fetchProduct = async () => {
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
    dispatch(getProductsThunk());
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
