import React from "react";
import ComponentTwo from "./ComponentTwo";
import { dateFormat } from "../utils/date";

function ComponentOne({ name }) {
  return (
    <li>
      <span>Comp-1 - {dateFormat(new Date())}</span>
      <ul>
        <ComponentTwo name={name} />
      </ul>
    </li>
  );
}

export default ComponentOne;
