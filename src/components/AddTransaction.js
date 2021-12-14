import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [litrat, setLitrat] = useState(0);

  const { addTankkaukset } = useContext(GlobalContext);
  const onSubmit = (e) => {
    e.preventDefault();

    const newTankkaukkset = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
      litrat: +litrat,
    };
    addTankkaukset(newTankkaukkset);
  };
  return (
    <div>
      <h3>Lisää auto, kilometrit ja tankatut litrat</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Auto</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Lisää auto..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Ajetut kilometrit</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Lisää kilometrit..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Tankattu määrä litroina.</label>
          <input
            type="number"
            value={litrat}
            onChange={(e) => setLitrat(e.target.value)}
            placeholder="Lisää tankattu määrä..."
          />
        </div>

        <button className="btn">Paina tästä</button>
      </form>
    </div>
  );
};
