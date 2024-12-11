import React from "react";
import Price from "../../Common/Price";
import { useSelector } from "react-redux";

function ProductTableBody() {
  const data = useSelector((state) => state.products.products);
  return (
    <tbody>
      {Array.isArray(data) && data.length > 0 ? (
        data.map(({ title, price, description, category }, idx) => {
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
