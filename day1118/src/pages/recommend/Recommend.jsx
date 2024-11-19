import React from 'react'
import style from './recommend.module.scss'
import { Link } from 'react-router-dom'
const Recommend = () => {
  return (
    <div  className={style.whole}>
      <header>
        <span>
          三
        </span>
        <p className={style.inp}> 
          <span>搜</span>
          <Link to="/search">请输入歌名</Link>
          <span>扫</span>
        </p>
        <span>
          语音
        </span>
      </header>
    </div>
  )
}

export default Recommend
