import React, { useEffect, useRef, useState } from "react";

const antiShake = () => {
  const timer = useRef(null);
  const [title, setTitle] = useState("");
  //   useEffect(() => {
  //     return undefined;
  //   }, []);

  //   防抖方法一
  const getData = (e) => {
    timer.current && clearInterval(timer.current);
    timer.current = setInterval(() => {
      fetch(`https://zyxcl.xyz/music/api/search?keywords=${e.target.value}`)
        .then((res) => res.json())
        .then((res) => console.log(res));
      clearInterval(timer.current);
    }, 1000);
  };
  //   防抖方法二
  //   useEffect(() => {
  //     if (title) {
  //       timer.current && clearInterval(timer.current);
  //       timer.current = setInterval(() => {
  //         fetch(`https://zyxcl.xyz/music/api/search?keywords=${title}`)
  //           .then((res) => res.json())
  //           .then((res) => console.log(res));
  //         clearInterval(timer.current);
  //       }, 1000);
  //     }
  //   }, [title]);

  return (
    <>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value.trim());
            getData(e);
          }}
        />
        <button>获取数据</button>
      </div>
    </>
  );
};

export default antiShake;
