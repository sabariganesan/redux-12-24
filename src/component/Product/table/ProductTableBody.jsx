import React from "react";
import Price from "../../Common/Price";
import { useSelector } from "react-redux";

function ProductTableBody() {
  const { products, isLoading, error } = useSelector((state) => state.products);
  return (
    <tbody>
      {isLoading ? (
        <tr>
          <td colSpan={4} align="center">
            Loading...
          </td>
        </tr>
      ) : typeof error === "string" ? (
        <tr>
          <td colSpan={4} align="center" style={{ color: "red" }}>
            {error}
          </td>
        </tr>
      ) : Array.isArray(products) && products.length > 0 ? (
        products.map(({ title, price, description, category }, idx) => {
          return (
            <tr key={idx}>
              <td align="center">{title}</td>
              <td align="center">{description}</td>
              <td align="center">{category}</td>
              <td align="center">
                <Price amount={price} />
              </td>
            </tr>
          );
        })
      ) : (
        <tr>
          <td colSpan={4} align="center">
            No Record
          </td>
        </tr>
      )}
    </tbody>
  );
}

export default ProductTableBody;
