import React, { useRef, useState , useEffect as useeffect , forwardRef , useImperativeHandle} from 'react'


// useEffect: 处理组件副作用（例如：调接口、定时器...）
// 1. 可以实现类似生命周期的功能
// 2. useEffect(callback, [依赖项数组])
// 3. callback 等待组件渲染完成之后执行
// 4. 不传第二个参数，callback 只要有state或者props改变就会执行，类似 componentDidUpdate
// 5. 依赖项传入空数组，callback 只执行一次，类似 componentDidMount
// 6. 依赖项传入具体变量，callback 在依赖项改变时执行
// 7. callback return 的函数
//   7.1 如果依赖项有值，依赖项改变时执行上一次 return 的函数
//   7.2 如果依赖项是空数组，组件销毁时执行，类似 componentWillUnmount
// 8. callback 不能是async函数，因为async函数返回promise对象，callback需要返回一个函数


// useRef: ref对象的地址在整个生命周期内保持不变
// 1. 存数据，current改变不会触发组件渲染，可以存和组件渲染无关的数据，useState存的数据改变时会更新组件
// 2. 获取 dom 元素
// 3. 调用子组件的属性和方法

// 调用函数子组件的数据和方法
// 1. 在父组件定义 ref 对象传给子组件
// 2. 在子组件中使用 forwardRef 接收父组件传入的 ref 对象
// 3. 在子组件中使用 useImperativeHandle 给 ref 赋值

// 把父组件传入的ref对象转发给 Child2 的第二个参数
const Child = forwardRef((props , ref) => {
  const [num,setNum] = useState(0)

  const button = useRef()
  const add = () => {
    setNum(prev => prev + 1)
    console.log(button);
  }
   // 给父组件传入的ref对象赋值
  useImperativeHandle( ref , () => {
    // return 的数据会添加到 ref.current 中
    return {
      num,
      setNum
    }
  },[num])

  return (
    <div>
      {num}
      <button ref={button} onClick={add}>+</button>
    </div>
  )
})


export const useEffect = () => {
    const [num,setNum] = useState(0)
    const [title,setTitle] = useState("12")

    const child = useRef()
    // useeffect( () => {
    //     console.log("useEffect 没有第二参数");
    // })
    // useeffect( () => {
    //     console.log("useEffect 依赖项为空");
    // },[])
    // useeffect( () => {
    //     console.log("useEffect 依赖项为num");
    //     return () => {
    //         console.log(num);
    //     }
    // },[num])



  return (
    <div>
        {num}
      <button onClick={() => setNum(prev => prev + 1)}>+</button>
      <h1>{title}</h1>
      <input type="text" value={title} onChange={e => {
        setTitle(e.target.value)
        console.log(child);
      }} />
      <Child ref={child} ></Child>
    </div>
  )
}

export default useEffect
