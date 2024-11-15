import React, { Component } from "react";

export default class syntheticEvent extends Component {
  state = {
    count: 0,
    title: "标题",
  };
  // 合成事件:
  // 1. React 自己实现了一套事件注册、分发的机制，统一了不同浏览器之间事件系统的差异。
  // 2. React 元素上声明的事件最终绑定到了 document 这个 DOM 节点上，（react18之后是 root节点）
  // 而不是 React 组件对应的 DOM 节点。只有document这个节点上面才绑定了DOM原生事件，其他节点没有绑定事件。
  // 这样简化了DOM原生事件，减少了内存开销。
  clickBox = (e) => {
    // e: react包装之后的合成事件对象
    console.log(e);
    // e.nativeEvent: 获取原始事件对象
    console.log(e.nativeEvent);
  }
  add(){
    // 没有this
    console.log(this);
  }
  render() {
    return <div>
        <div onClick={this.clickBox} style={{width:"100px",height:"100px",background:"red"}}>
        </div>
        <button onClick={this.add.bind(this)}>this</button>
    </div>;
  }
}
