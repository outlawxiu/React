import React, { useState } from "react";
import SetState from "./components/setState";
import SyntheticEvent from './components/syntheticEvent'
import UseEffect from './components/useEffect'
import AboutUseMemo from './components/aboutUseMemo'
import AboutUseCallback from './components/aboutUseCallback'
import AboutContext from './components/aboutContext'
import AntiShake from './components/antiShake'
import Parent from './components/Parent'
const App = () => {
  return (
    <div>
      {/* <SetState></SetState> */}
      {/* <SyntheticEvent></SyntheticEvent> */}
      {/* <UseEffect></UseEffect> */}
      {/* <AboutUseMemo></AboutUseMemo> */}
      {/* <AboutUseCallback></AboutUseCallback> */}
      {/* <AboutContext></AboutContext> */}
      {/* <AntiShake></AntiShake> */}
      {/* 高阶组件 */}
      <Parent></Parent>
    </div>
  );
};

export default App;
