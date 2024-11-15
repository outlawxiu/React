import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import ctx, { Provider, Consumer } from "../context/appCtx";
const Child = () => {
  const value = useContext(ctx);
//   console.log(value);
  //   return (<div>Child组件</div>);
  return <Consumer>
    {(value) => {
        console.log('父组件传入的参数', value)
    }}
  </Consumer>
};

// const Parent = () => {
//   const [title, setTitle] = useState(10);
//   return <Provider value={{ title }}></Provider>;
// };

const aboutContext = () => {
  const [num, setNum] = useState(0);
  const [title,setTitle] = useState("")
    // useEffect(( ) => {
    //     if (title.length > 10) {
    //         setTitle("太长了")
    //     }
    // })
    useLayoutEffect(( ) => {
        if (title.length > 10) {
            setTitle("太长了")
        }
    })
  
  return (
    <Provider value={{ num, setNum }}>
        <button onClick={() =>setTitle("asdasdadasdasdssad")} >+++</button>
      <div>
        <input type="text" value={title}  onChange={ e => setTitle(e.target.value)} />
      </div>
      <Child></Child>
    </Provider>
  );
};

export default aboutContext;
