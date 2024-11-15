import React, { Component } from "react";
import style from "../scss/select.module.scss";
export default class Select extends Component {

  shouldComponentUpdate(){
    return true
  }
  render() {
    return (
      <div
        className={
          this.props.nowState ? `${style.box} ${style.active}` : style.box
        }
        onClick={this.props.ressetState}
      >
        <div className={style.select}>
          {!this.props.selectData.length && "请选择"}
          {this.props.selectData.map((item) => (
            <span key={item}>
              {item}
              <b
                onClick={(e) => {
                  e.stopPropagation();
                  this.props.reduceList(item);
                }}

              >
                X
              </b>
            </span>
          ))}
        </div>
        {/* <div className={style.state}>{this.props.nowState ? "∧" : "∨"}</div> */}
        <div className={ !this.props.nowState ? `${style.state} ${style.circle}` :  style.state}>{"▲ "}</div>
      </div>
    );
  }
}


