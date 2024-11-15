import React, { Component, PureComponent } from "react";
import style from "../scss/list.module.scss";
export default class List extends Component {
  state = {
    searchValue: "",
    searchList: [],
  };
  search = (e) => {
    const newArr = this.props.allData.filter((item) =>
      item.includes(e.target.value.trim())
    );
    this.setState({
      searchValue: e.target.value,
      searchList: newArr,
    });
  };
  render() {
    const { nowState, selectData, changeData, allData } = this.props;
    return (
      <div className={!nowState ? `${style.list} ${style.hide}` : style.list}>
        <input
          className={style.inp}
          type="text"
          placeholder="请选择"
          value={this.state.searchValue}
          onChange={this.search}
        />
        {!this.state.searchList.length && this.state.searchValue && (
          <h5>暂无数据</h5>
        )}
        <ul>
          {this.state.searchValue
            ? this.state.searchList.map((item) => (
                <li key={item}>
                  <input
                    className={style.inp}
                    type="checkbox"
                    id={item}
                    checked={selectData.includes(item)}
                    onChange={() => {
                      changeData(item);
                    }}
                  />
                  <label htmlFor={item}>{item}</label>
                </li>
              ))
            : allData.map((item) => (
                <li key={item}>
                  <input
                    className={style.inp}
                    type="checkbox"
                    id={item}
                    checked={selectData.includes(item)}
                    onChange={() => {
                      changeData(item);
                    }}
                  />
                  <label htmlFor={item}>{item}</label>
                </li>
              ))}
        </ul>
        {/* <ul style={!this.state.searchValue ? { display: "none" } : null}>
          {this.state.searchList.map((item) => (
            <li key={item}>
              <input
                className={style.inp}
                type="checkbox"
                id={item}
                checked={selectData.find((name) => name === item) || false}
                onChange={() => {
                  changeData(item);
                }}
              />
              <label htmlFor={item}>{item}</label>
            </li>
          ))}
        </ul>
        <ul style={this.state.searchValue ? { display: "none" } : null}>
          {allData.map((item) => (
            <li key={item}>
              <input
                className={style.inp}
                type="checkbox"
                id={item}
                checked={selectData.find((name) => name === item) || false}
                onChange={() => {
                  changeData(item);
                }}
              />
              <label htmlFor={item}>{item}</label>
            </li>
          ))}
        </ul> */}
      </div>
    );
  }
}
