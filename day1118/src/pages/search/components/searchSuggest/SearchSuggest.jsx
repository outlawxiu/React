import React, { useEffect } from "react";
import style from "./searchSuggest.module.scss";
import { useFetch } from "../../../../hooks/useFetch";
import Loading from "../loading/Loading";
const SearchSuggest = (props) => {
  const { data, refresh, loading } = useFetch({
    url: "/search/suggest",
    immediate: true,
  });
  useEffect(() => {
    refresh({ keywords: props.keywords, type: "mobile" });
  }, [props.keywords]);

  return (
    <div className={style.main}>
      {loading ? (
        <Loading></Loading>
      ) : (
        <>
          <h5>搜索建议</h5>
          <ul>
            {data?.result?.allMatch?.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  props.setIsResult(true);
                  props.setKeywords(item.keyword);
                  props.addInHistroy(item.keyword)
                }}
              >
                {item.keyword}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default SearchSuggest;
