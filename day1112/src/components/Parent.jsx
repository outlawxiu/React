import React, { useState } from "react";
import Child from "./Child";
import { useFetch } from "../hooks/useFetch";
const Parent = () => {
  const [keywords, setKeywords] = useState("");
  const { data, loading, refresh } = useFetch({
    url: "https://zyxcl.xyz/music/api/search",
    params: {
      keywords: "aaaaa",
    },
    immediate: true,
  });
  return (
    <div>
      <h1>父组件</h1>
      <input
        type="text"
        value={keywords}
        onChange={(e) => {
          setKeywords(e.target.value);
        }}
      />
      <button
        onClick={() => {
          refresh({ keywords });
        }}
      >
        刷新
      </button>
      <div>
        <h1>about"{keywords || "aaaaa"}"</h1>
        <ul>
          {data.result?.songs.map(item => <li key={item.id}>{item.name}</li>)}
        </ul>
      </div>
      {/* <Child></Child> */}
    </div>
  );
};

export default Parent;
