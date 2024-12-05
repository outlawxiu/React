import React from 'react'
import { Outlet , NavLink} from 'react-router-dom'
import style from './home.module.scss'
const home = () => {
  return (
    <div id={style.whole}>
      <main>
        <Outlet>
            
        </Outlet>
      </main>
      <footer>
        <NavLink to={"/wrong"}>错题本</NavLink>
        <NavLink to={"/select"}>专项练习</NavLink>
        <NavLink to={"/mine"}>我的</NavLink>
      </footer>
    </div>
  )
}

export default home
