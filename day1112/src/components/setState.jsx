import React, { Component } from "react";

export default class setState extends Component {
  state = {
    count: 0,
    title: "标题",
  };

  add = () => {
    // 1. setState 会把传入的对象和原本的state进行合并
    // 2. setState 是异步更新的
    // 3. 当连续调用多次 setState react 会进行合并更新，只渲染一次
    // 4. setState 可以传入一个函数，函数的参数就是最新的state
    // 5. setState的第二个参数可以传入一个函数，等待组件更新后执行
    // this.setState({count: this.state.count + 1});
    // this.setState({count: this.state.count + 1});
    // this.setState({count: this.state.count + 1});
    this.setState(
      (prev) => ({ count: prev.count + 1 }),
      () => {
        console.log("第一次更新");
      }
    );
    this.setState(
      (prev) => ({ count: prev.count + 1 }),
      () => {
        console.log("第二次更新");
      }
    );
    this.setState(
      (prev) => ({ count: prev.count + 1 }),
      () => {
        console.log("第三次更新");
      }
    );
    console.log("add函数", this.state.count);
  };

  render() {
    return (
      <div>
        <button>-</button>
        {this.state.count}
        <button onClick={this.add}>+</button>
      </div>
    );
  }
}
