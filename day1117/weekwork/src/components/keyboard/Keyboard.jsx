import React, { useEffect, useRef, useState } from "react";
import style from "./keyboard.module.scss";

const keyboard = (props) => {
  const [nowUrl, setNowUrl] = useState("");
  const audio = useRef();
  useEffect(() => {
    audio.current.volume = props.volume;
  }, [props]);

  useEffect(() => {
    //点太快了报错
    document.addEventListener("keydown", (e) => {
      const event = document.querySelector(`.${e.key.toUpperCase()}`);
      if (event) {
        event.classList.add(style.active);
        event.click(0);
      }
    });
    document.addEventListener("keyup", (e) => {
      const event = document.querySelector(`.${e.key.toUpperCase()}`);
      if (event) {
        event.classList.remove(style.active);
      }
    });
    return () => {
      // 清除
    };
  }, []);
  return (
    <>
      <div className={style.keyboard}>
        {props.data.value?.map((item, index) => (
          <button
            key={index}
            disabled={props.isDisabled}
            className={item.keyTrigger}
            onClick={() => {
              setNowUrl(props.isBank ? item.bankUrl : item.url);
              props.setNowMusic(item.id);
              const a = setTimeout(() => {
                audio.current.paused && audio.current.play()
                clearTimeout(a);
              });
            }}
          >
            {item.id}
          </button>
        ))}
      </div>
      <audio src={nowUrl} ref={audio} autoPlay></audio>
    </>
  );
};

export default keyboard;
