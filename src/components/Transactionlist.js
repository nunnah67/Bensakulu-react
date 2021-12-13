import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./Transaction";
export const Transactionlist = () => {
  const { tankkaukset } = useContext(GlobalContext);

  return (
    <>
      <h3>Kulutus Historia</h3>
      <ul className="list">
        {tankkaukset.map(tankkaukset =>(<Transaction key={tankkaukset.id} tankkaukset={tankkaukset}/>) )}
      </ul>
    </>
  );
};
 