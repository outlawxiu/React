import { legacy_createStore } from "redux";

const initState = {
  title: "默认标题",
  num: 0,
};

const reducer = (state, action) => {
  // state: 当前的数据   console.log(state);
  // action: 本次修改的描述信息   console.log(action);
  // console.log(state);
  
  if (action.type === "add") {
    return {
      ...state,
      num: (state.num += action.payload),
    };
  } else if (action.type === "change_title") {
    return {
      ...state,
      title: action.payload,
    };
  }

  return state;
};

const store = legacy_createStore(reducer, initState);

export default store;
