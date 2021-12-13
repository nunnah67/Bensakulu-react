import React,{useContext} from 'react'
import { GlobalContext } from "../context/GlobalState";
export const Bensakulu = () => {
    const { tankkaukset } = useContext(GlobalContext);
    const amounts = tankkaukset.map(tankkaukset => tankkaukset.litrat);

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    const kokonaishinta = (total*1.7).toFixed(2);
 
    return (
    <>
      <h4>Bensakulut</h4>
      <h1>{kokonaishinta}€</h1>
    </>
  )
}

export default Bensakulu
