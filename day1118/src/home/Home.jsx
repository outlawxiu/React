import React from "react";
import { NavLink, Outlet } from "react-router-dom";
const Home = () => {
  return (
    <div 
    className="whole"
    >
      <main>{<Outlet></Outlet>}</main>
      <footer>
        <NavLink to="/recommend">推荐</NavLink>
        <NavLink to="/find">发现</NavLink>
        <NavLink to="/roam">漫游</NavLink>
        <NavLink to="/dynamic">动态</NavLink>
        <NavLink to="/mine">我的</NavLink>
      </footer>
    </div>
  );
};

export default Home;
