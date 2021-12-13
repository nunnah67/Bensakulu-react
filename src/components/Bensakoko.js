import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
export const Bensakoko = () => {
  const { tankkaukset } = useContext(GlobalContext);
  const amounts = tankkaukset.map((transaction) => transaction.amount);
  const litrat = tankkaukset.map((transaction) => transaction.litrat);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const tankattu = litrat
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  let kulutus = ((tankattu * 100) / income).toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h5>Kilometriä Ajettu</h5>
        <p className="kmplus">{income} KM</p>
      </div>
      <div>
        <h5>Tankattu Litroja</h5>
        <p className="tankkaus+">{tankattu} L</p>
      </div>
      
      <div>
        <h5>Bensan hinta/L</h5>
        <p className="litrahinta">1.70 €</p>
      </div>
      <div>
        <h5>
          Kulutus/
          <br />
          100KM
        </h5>
        <p className="money minus">{kulutus} L</p>
      </div>
    </div>
  );
};
