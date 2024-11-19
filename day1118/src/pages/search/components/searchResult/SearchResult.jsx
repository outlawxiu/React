import React, { useEffect, useState } from "react";
import { useFetch } from "../../../../hooks/useFetch";
import style from "../searchSuggest/searchSuggest.module.scss";
import Loading from "../loading/Loading";
import { useNavigate } from 'react-router-dom'
const SearchResult = (props) => {
  const navigateTo = useNavigate()
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
            {data?.result?.songs?.map((item, index) => (
              <li key={index} onClick={() => {
                navigateTo(`/player?id=${item.id}`)
              }}>{item.name} {item.artists.map( person => person.name).join("/")}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default SearchResult;
