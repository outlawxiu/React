import React, { useMemo, useState } from 'react'

// useMemo （类似vue的计算属性）
// 1. useMemo(callback, [依赖项])
// 2. 返回一个缓存的值
// 3. 依赖项数组改变执行 callback 计算结果，没改变从缓存中读取值


const aboutUseMemo = () => {
    const [list,setList] = useState([])
    const [isOdd,setIsOdd] = useState(true)
    const showList = useMemo(() => {
        if (isOdd) {
            return list.filter(num => num % 2 === 1 )
        }
        return list.filter(num => num % 2 === 0 )
    },[list,isOdd])

  return (
    <div>
      <button onClick={() => {
        setList([...list,list.length])
      }}>push</button>
      <button onClick={() => {
        setIsOdd(!isOdd)
      }}>切换</button>
      <h1>{isOdd ?  "奇数" : "偶数"}</h1>
      <hr />
      <ul>
        {showList.map( item => <li key={item}>{item}</li>)}
      </ul>
    </div>
  )
}

export default aboutUseMemo
