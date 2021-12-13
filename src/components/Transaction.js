import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
export const Transaction = ({ tankkaukset }) => {
  const { deleteTankkaukset } = useContext(GlobalContext);
  const sign = tankkaukset.amount < 0 ? "-" : "+";
  return (
    <li className={tankkaukset.litrat < 0 ? "minus" : "plus"}>
      {tankkaukset.text}{" "}
      <span>
        {sign}
        {Math.abs(tankkaukset.litrat)} Litraa
      </span>
      <button
        onClick={() => deleteTankkaukset(tankkaukset.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};
