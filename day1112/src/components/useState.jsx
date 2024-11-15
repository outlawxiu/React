import React , {useState} from "react";
// react v16.8之后可以使用 hook 让函数组件使用状态
// hook: 以 use 开头的函数
// hook 使用规则
// 1. 只能在函数组件和自定义hook中使用 hook
// 2. 只能在函数最顶层使用hook，不能在 if、for、子函数中使用hook


// useState: 
// 1. 定义函数组件的状态
// 2. 返回一个数组，第一值是变量，第二个是修改变量的函数
// 3. 调用函数修改状态时会把传入的数据覆盖之前的数据
// 4. 更新变量是异步操作，无法立即获取到更新后的数据
// 5. 更新变量时可以传入一个函数吗，函数的参数是最新的数据，用函数的返回值覆盖之前的变量

const setState = () => {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    console.log("add函数" , count);
  };

  return <div>
    <button>-</button>
    {count}
    <button onClick={add}>+</button>
  </div>;
};

export default setState;