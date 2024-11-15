import React from "react";

import { useStore } from "./store/index";

const App = () => {
  const { state, dispatch } = useStore();
  return (
    <div>
      <button
        onClick={() =>
          dispatch({
            type: "add_cart",
          })
        }
      >
        push
      </button>
      {JSON.stringify(state)}
      {state.cart.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </div>
  );
};

export default App;
