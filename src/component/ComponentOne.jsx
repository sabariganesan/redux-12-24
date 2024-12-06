import React from "react";
import ComponentTwo from "./ComponentTwo";

function ComponentOne({ name }) {
  return (
    <li>
      <span>Comp-1</span>
      <ul>
        <ComponentTwo name={name} />
      </ul>
    </li>
  );
}

export default ComponentOne;
