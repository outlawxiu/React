import React, { useContext, createContext, useReducer } from "react";
import { initState, reducer } from "./reducer";

export const storeCtx = createContext();

//高阶组件 对组件进行封装 返回新组建
export const Provider = (props) => {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <storeCtx.Provider value={{ state, dispatch }}>
      {props.children}
    </storeCtx.Provider>
  );
};

export const useStore = () => useContext(storeCtx)


