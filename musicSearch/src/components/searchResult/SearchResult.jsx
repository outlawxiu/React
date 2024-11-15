import React, { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import style from "../searchSuggest/searchSuggest.module.scss";
import Loading from "../loading/Loading";
const SearchResult = (props) => {
  const { data, loading } = useFetch({
    url: "/search",
    params: { keywords: props.keywords },
    immediate: true,
  });

  return (
    <div className={style.main}>
      {loading ? (
        <Loading></Loading>
      ) : (
        <>
          <h5>搜索结果</h5>
          <ul>
            {data.result?.songs?.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default SearchResult;
