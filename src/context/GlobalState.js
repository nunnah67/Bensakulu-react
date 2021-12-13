import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//Initial state

const initialState = {
  tankkaukset: [
    { id: 1, text: "opel", amount: 20, litrat: 2000 },
    { id: 2, text: "Rellu", amount: 300, litrat: 24 },
    { id: 3, text: "Citroen", amount: 10, litrat: 20 },
    { id: 4, text: "Ford", amount: 150, litrat: 234 },
  ],
};
// Createcontext
export const GlobalContext = createContext(initialState);

//Provider component

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  //Actions
  function deleteTankkaukset(id) {
    dispatch({
      type: "DELETE_TANKKAUKSET",
      payload: id,
    });
  }
  function addTankkaukset(tankkaukset) {
     dispatch({
       type: "ADD_TANKKAUKSET",
       payload: tankkaukset,
     });
   }
  return (
    <GlobalContext.Provider
      value={{ tankkaukset: state.tankkaukset,
           deleteTankkaukset,
          addTankkaukset
          }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
