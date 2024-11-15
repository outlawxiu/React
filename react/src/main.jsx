import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

const root = createRoot(document.getElementById('root'))
root.render(
    <App />
)



// import React from "react"; //创建
// import { createRoot } from "react-dom/client";
// const root = createRoot(document.getElementById("root"));

// // 三个变化 class -> className   for ->  htmlFor  style必须写对象   不能渲染对象
// const box = (
//   <>
//     <div style={{color:"red"}}>数字:{1112}</div>
//     <div>字符串:{"dasd"}</div>
//     <div>布尔值true:{true}</div>
//     <div>布尔值false:{false}</div>
//     <div>空字符串:{""}</div>
//     <div>null:{null}</div>
//     <div>undefined:{undefined}</div>
//     <div>数组:{[1,2,3]}</div>
//     {/* {  不能渲染对象  <div>对象:{{a : 1}}</div> } */}
//     <label htmlFor="inp"> sadasdsad</label>
//     <input type="checkbox" id="inp"/>
//   </>
// );




// //jsx js + xml
// root.render(box);
