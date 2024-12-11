import React, { useEffect, useState } from "react";
import ProductHeader from "../component/Product/ProductHeader";
import ProductTable from "../component/Product/table/ProductTable";
import { useDispatch } from "react-redux";
import { updateProducts } from "../reducer/productReducer";
import { getProducts } from "../service/ProductService";

function Product() {
  const dispatch = useDispatch();

  const fetchProduct = async () => {
    const data = await getProducts();
    dispatch(updateProducts(data));
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
