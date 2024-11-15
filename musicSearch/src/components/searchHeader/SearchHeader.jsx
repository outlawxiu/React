import React, { useRef } from "react";
import style from "./searchHeader.module.scss";
const SearchHeader = (props) => {
  const input = useRef();
  return (
    <div className={style.header}>
      <span>←</span>
      <p className={style.input}>
        <input
          ref={input}
          type="text"
          placeholder="请输入歌手或者歌曲"
          value={props.keywords}
          onChange={(e) => {
            props.setIsResult(false);
            props.setKeywords(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.keyCode === 13) {
              props.setKeywords(input.current.value);
              props.setIsResult(true);
              props.addInHistroy(input.current.value);
            }
          }}
        />
        {props.keywords && (
          <b
            onClick={() => {
              props.setKeywords("");
            }}
          >
            ×
          </b>
        )}
      </p>
      <span
        onClick={() => {
          if (input.current.value) {
            props.setKeywords(input.current.value);
            props.setIsResult(true);
            props.addInHistroy(input.current.value);
          }
        }}
      >
        搜索
      </span>
    </div>
  );
};

export default SearchHeader;
