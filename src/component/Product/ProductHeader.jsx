import React from "react";
import { useSelector } from "react-redux";

function ProductHeader() {
  const data = useSelector((state) => state.products.products);
  return (
    <h1>
      Products {Array.isArray(data) && data.length > 0 && `- ${data.length}`}
    </h1>
  );
}

export default ProductHeader;
