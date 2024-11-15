import React, { useEffect } from "react";
import style from "./searchMain.module.scss";
import { useFetch } from "../../hooks/useFetch";
import Loading from "../loading/Loading";
const SearchMain = (props) => {
  const { data, loading } = useFetch({ url: "/search/hot", immediate: true });
  return (
    <div className={style.main}>
      {loading ? (
        <Loading></Loading>
      ) : (
        <>
          <div className={style.history}>
            <h5>搜索历史</h5>
            <ul>
              {props.searchHistroy.map((item, index) => (
                <li
                  key={index}
                  onClick={() => {
                    props.addInHistroy(item);
                    props.setIsResult(true);
                    props.setKeywords(item);
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className={style.hot}>
            <h5>热门搜索</h5>
            <ul>
              {data.result?.hots.map((item, index) => (
                <li
                  key={index}
                  onClick={() => {
                    props.addInHistroy(item.first);
                    props.setIsResult(true);
                    props.setKeywords(item.first);
                  }}
                >
                  {item.first}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default SearchMain;
