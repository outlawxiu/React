import React, { useEffect, useState } from "react";

import store from '../store/index'
// console.log(store);

// import { useSelector, useDispatch } from "react-redux";
// 函数组件中使用 redux
const Child1 = () => {
  // const dispath = useDispatch();
  // const title = useSelector((state) => state.title);
  const [title,setTitle] = useState(store.getState().title)
  useEffect(() => {
    const storeSub = store.subscribe(() => {
      console.log("Child1中的store.subscribe修改title");
      setTitle(() => store.getState().title)
    })
    return storeSub
  }, []);

  return (
    <div>
      <hr />
      <h1>Child1 函数组件中使用 redux </h1>
      <p>{title}</p>
      <input
        type="text"
        value={title}
        onChange={e => {
          // 调用dispatch会执行reducer函数
          // dispath({
          //   type: "change_title",
          //   payload: e.target.value,
          // });
          store.dispatch({
            type: "change_title",
            payload: e.target.value,
          })
        }}
      />
      <hr />
    </div>
  );
};

export default Child1;
