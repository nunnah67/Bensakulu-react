import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [litrat, setLitrat] = useState(0);
  
  const { addTankkaukset } = useContext(GlobalContext);
  const onSubmit=e=> {
    e.preventDefault();

    const newTankkaukkset = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
      litrat: +litrat
    }
    addTankkaukset(newTankkaukkset);
  }
  return (
    <div>
      <h3>
        Lisää auto ja kilometrit ja tankatut litrat
       
      </h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Auto</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Lisää..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Kilometrit</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Tankattu määrä</label>
          <input
            type="number"
            value={litrat}
            onChange={(e) => setLitrat(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        
        <button className="btn">Tää on lisää nappi</button>
      </form>
    </div>
  );
};
