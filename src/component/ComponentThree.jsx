import React from "react";
import { useSelector } from "react-redux";

function ComponentThree() {
  const userName = useSelector((state) => state.app.userName);
  return (
    <li>
      <span>Comp - 3 - {userName}</span>
    </li>
  );
}

export default ComponentThree;
