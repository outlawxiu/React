import React, { useState, useCallback } from "react";

const Child = React.memo( (props) => {
    console.log("子组件加载");
  return (
    <div>
      <button onClick={() => props.add(props.nums.length)}>添加</button>
      <ul>
        {props.nums.map((it) => (
          <li key={it}>{it}</li>
        ))}
      </ul>
    </div>
  );
})

const aboutUseCallback = () => {
  const [title, setTitle] = useState("");
  const [nums, setNums] = useState([]);
  const add = useCallback(
    (text) => {
      setNums([...nums, text]);
    },
    [nums]
  );

  return (
    <div>
      <h3>
        useCallback <br />
        1.useCallback(callback, [依赖项]) <br />
        2.返回一个缓存的函数 <br />
        3.依赖项数组改变创建新函数，没改变从缓存中读取函数
        <br />
        4. 当子组件使用 React.memo 优化性能时，父组件给子组件传入函数需要用
        useCallback 包裹，否则 React.memo 失效
      </h3>
      <hr />
      <h2>{title}</h2>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="搜索"
      />
      <hr />
      <button onClick={() => add(nums.length)}>添加</button>
      <ul>
        {nums.map((it) => (
          <li key={it}>{it}</li>
        ))}
      </ul>
      <hr />
      <Child nums={nums} add={add}></Child>
    </div>
  );
};

export default aboutUseCallback;
