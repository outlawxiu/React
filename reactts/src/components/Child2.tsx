import React, { Component } from "react";

import store from "../store/index";

// 类组件中使用redux
class Child2 extends Component {
  state = {
    num: store.getState().num,
  };

  componentDidMount(): void {
    this.storeSub = store.subscribe(() => {
      //   this.setState({
      //     num: store.getState().num
      //   });
      console.log("Child2中的store.subscribe修改num");
      this.setState(() => ({
        num: store.getState().num,
      }));
    });
  }

  componentWillUnmount(): void {
    this.storeSub()
  }

  render() {
    return (
      <div>
        <hr />
        <h1>Child2 类组件中使用redux</h1>
        <p>{this.state.num}</p>
        <button
          onClick={() => {
            store.dispatch({
              type: "add",
              payload: 1,
            });
          }}
        >
          +
        </button>
        <hr />
      </div>
    );
  }
}
export default Child2;
