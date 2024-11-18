import React from 'react'
import style from "../controller/controller.module.scss";
const Switch = (props) => {
  return (
    <div className="power" onClick={() => {
        props.setIsDisabled(!props.isDisabled)
    }}>
    Power
    <span className={style[!props.isDisabled]}>
        <b className="open"></b>
        <b className="close"></b>
    </span>
</div>
  )
}

export default Switch
