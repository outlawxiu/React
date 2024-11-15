// import { Component, createRef, useState } from "react";

// // function App() {
// //   const a = 0
// //   return (
// //     <>
// //     </>
// //   )
// // }

// class App extends Component {
//   state = {
//     title: "",
//     arr: [],
//   };

//   inpRef = createRef();

//   resTitle = (e) => {
//     this.setState({
//       title: e.target.value,
//     });
//   };

//   addList = () => {

//     if (!this.state.title.trim()) return alert("输入不为空")
//     // const newArr = [...this.state.arr, this.inpRef.current.value];
//     const newArr = [...this.state.arr, this.state.title];
//     this.setState({
//       arr: newArr
//     });
//     this.state.title = ""
//     // this.inpRef.current.defaultValue = ""
//     console.log(this.inpRef);
//   };

//   del = (index) => {
//     const newArr = JSON.parse(JSON.stringify(this.state.arr))
//     newArr.splice(index,1)
//     this.setState({
//       arr: newArr,
//     });
//   }

//   render() {
//     const { todo, title, arr } = this.state;
//     return (
//       <>
//         <input
//           type="text"
//           placeholder="请输入先要做的事情"
//           value={title}
//           onChange={this.resTitle}
//           ref={this.inpRef}
//         />
//         <button onClick={this.addList}>push</button>
//         <ul>
//           {arr.map((item, index) => (
//             <li key={index}>
//               第{index + 1}件事:{item}
//               <button onClick={() => {this.del(index)}}>删除</button>
//             </li>
//           ))}
//         </ul>
//       </>
//     );
//   }
// }
// export default App;

import React, { Component } from "react";
import List from "./components/List.jsx";
import Select from "./components/Select.jsx";
class App extends Component {
  state = {
    allData: ["张三", "李四", "王五", "马六", "大傻春", "蘑菇", "乃龙","关羽","曹操","吕布","吕蒙","钟会"],
    selectData: ["张三", "李四"],
    nowState: false,
  };
  reset = () => {
    this.setState({
      selectData: [],
    });
  };
  ressetState = () => {
    this.setState({
      nowState: !this.state.nowState,
    });
  };
  reduceList = (item) => {
    const index = this.state.selectData.findIndex((name) => name === item);
    if (index === -1) return alert("没有该数据");
    this.state.selectData.splice(index, 1);
    const newArr = [...this.state.selectData];
    this.setState({
      selectData: newArr,
    });
  };
  changeData = (item) => {
    const index = this.state.selectData.findIndex((name) => name === item);
    index === -1
      ? this.state.selectData.push(item)
      : this.state.selectData.splice(index, 1);
    const newArr = [...this.state.selectData];
    this.setState({
      selectData: newArr,
    });
  };
  shouldComponentUpdate() {
    return true;
  }
  render() {
    return (
      <>
        <button onClick={this.reset}>重置</button>
        <Select
          selectData={this.state.selectData}
          nowState={this.state.nowState}
          ressetState={this.ressetState}
          reduceList={this.changeData}
        ></Select>
        <List
          nowState={this.state.nowState}
          allData={this.state.allData}
          selectData={this.state.selectData}
          changeData={this.changeData}
        ></List>
      </>
    );
  }
}

export default App;
