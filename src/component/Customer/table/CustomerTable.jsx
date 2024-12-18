import React from "react";
import CustomerTableHead from "./CustomerTableHead";
import CustomerTableBody from "./CustomerTableBody";

function CustomerTable() {
  return (
    <table width="100%">
      <CustomerTableHead />
      <CustomerTableBody />
    </table>
  );
}

export default CustomerTable;
