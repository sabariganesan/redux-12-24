import React from "react";
import { useSelector } from "react-redux";
import { useAddPostMutation } from "../../Query/CustomerQuery";

function CustomerHeader() {
  const data = [];
  const [addPost] = useAddPostMutation();

  return (
    <h1 style={{ display: "flex", justifyContent: "space-between" }}>
      Customer {Array.isArray(data) && data.length > 0 && `- ${data.length}`}
      <button onClick={() => addPost({})}>Add Customer</button>
    </h1>
  );
}

export default CustomerHeader;
