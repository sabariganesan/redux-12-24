import React from "react";
import ProductTableBody from "./ProductTableBody";
import ProductTableHead from "./ProductTableHead";

function ProductTable() {
  return (
    <table width="100%">
      <ProductTableHead />
      <ProductTableBody />
    </table>
  );
}

export default ProductTable;
