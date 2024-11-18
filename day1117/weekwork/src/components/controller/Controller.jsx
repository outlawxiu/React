import React from "react";
import style from "./controller.module.scss";
import Switch from "../switch/Switch";
import Volume from "../volume/Volume";
const controller = (props) => {
  return (
    <div className={style.right}>
      <Switch
        isDisabled={props.isDisabled}
        setIsDisabled={props.setIsDisabled}
      ></Switch>
      <div className={style.nowMusic}>{props.nowMusic}</div>
      <Volume volume={props.volume} setVolume={props.setVolume}></Volume>
      <div className={style.bank} onClick={() => {
        props.setIsBank(!props.isBank)
      }}>
        Bank
        <span className={style[!props.isBank]}>
          <b className={style.music1}></b>
          <b className={style.music2}></b>
        </span>
      </div>
    </div>
  );
};

export default controller;
