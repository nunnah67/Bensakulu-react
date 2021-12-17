import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
export const Bensakulu = () => {
  const { tankkaukset } = useContext(GlobalContext);
  const amounts = tankkaukset.map((tankkaukset) => tankkaukset.litrat);
const kilometrit = tankkaukset.map((tankkaukset) =>tankkaukset.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  const kokonaishinta = (total * 1.7).toFixed(2);
  const kokoh = kilometrit.reduce((acc, item) => (acc += item), 0).toFixed(2);
  const perkm = (kokonaishinta/kokoh).toFixed(2);
  return (
    <>
      <h4>Bensakulut (Kaikki yhteensä)</h4>
      <h1>{kokonaishinta}€</h1><br/>
      <h3>{perkm} €/km</h3>
    </>
  );
};

export default Bensakulu;
