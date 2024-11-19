import React, { useEffect, useRef, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import style from "./player.module.scss";
import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";
const formatTime = (time) => {
  `${
    parseInt(time / 60) < 10 ? "0" + parseInt(time / 60) : parseInt(time / 60)
  } : ${
    parseInt(time % 60) < 10 ? "0" + parseInt(time % 60) : parseInt(time % 60)
  }`;
};
const Player = () => {
  const [isHide, setIsHide] = useState(true);
  const [searchParams] = useSearchParams();
  const audio = useRef();
  const scroll = useRef();
  const avator = useRef();
  const [nowTime, setNowTime] = useState(audio.current?.currentTime || 0);
  const [endTime, setEndTime] = useState(audio.current?.duration || 0);
  const timer = useRef(null);

  const { data: songDetail } = useFetch({
    url: "/song/detail",
    params: { ids: searchParams.get("id") },
    immediate: true,
  });
  const { data: songUrl } = useFetch({
    url: "/song/url",
    params: { id: searchParams.get("id") },
    immediate: true,
  });
  const { data: lyric } = useFetch({
    url: "/lyric",
    params: { id: searchParams.get("id") },
    immediate: true,
  });

  useEffect(() => {
    scroll.current.scrollTop =
      document.querySelector(`.${style.now}`)?.offsetTop - 60;
    if (audio.current.paused) {
      avator.current.classList.remove(style.running);
    } else {
      avator.current.classList.add(style.running);
    }
  }, [nowTime]);

  useEffect(() => {
    timer.current = setInterval(() => {
      setNowTime(() => audio.current?.currentTime || 0);
    });
    audio.current.addEventListener("canplay", function () {
      setEndTime(() => audio.current.duration);
    });
    return () => {
      clearInterval(timer.current);
    };
  }, []);

  const songWords = useMemo(() => {
    const reg = /\[(\d{2}):(\d{2}\.\d{2,3})\]/;
    const songWordsArr = lyric?.lrc?.lyric?.split("\n").map((item) => {
      const [, m, s, text] = item.split(reg);
      if (text) {
        return {
          time: m * 60 + +s,
          text: text,
        };
      }
    });
    return songWordsArr?.filter((item) => item);
  }, [lyric]);

  return (
    <>
      <div className={style.bgWrap}>
        <img src={songDetail?.songs[0]?.al.picUrl} className={style.bgImg} />
        <div className={style.bgMask}></div>
      </div>
      <div className={style.whole}>
        <h5>音乐播放器</h5>
        <div className={style.songName}>{songDetail?.songs[0]?.name}</div>
        <img
          src={songDetail?.songs[0]?.al.picUrl}
          className={style.avator}
          ref={avator}
        />
        <div className={style.lyric} ref={scroll}>
          {songWords?.map((item, index) => (
            <p
              key={item.time}
              className={
                audio.current.currentTime >= item.time &&
                audio.current.currentTime <= (songWords[index + 1]?.time || 999)
                  ? style.now
                  : ""
              }
            >
              {item.text}
            </p>
          ))}
        </div>
        <div className={style.nowTime}>
          {`${
            parseInt(nowTime / 60) < 10
              ? "0" + parseInt(nowTime / 60)
              : parseInt(nowTime / 60)
          } : ${
            parseInt(nowTime % 60) < 10
              ? "0" + parseInt(nowTime % 60)
              : parseInt(nowTime % 60)
          }`}
          <input
            type="range"
            value={
              (audio.current?.currentTime / audio.current?.duration) * 100 || 0
            }
            onChange={(e) => {
              audio.current.currentTime =
                (e.target.value / 100) * audio.current?.duration || 0;
            }}
          />
          {`${
            parseInt(endTime / 60) < 10
              ? "0" + parseInt(endTime / 60)
              : parseInt(endTime / 60)
          } : ${
            parseInt(endTime % 60) < 10
              ? "0" + parseInt(endTime % 60)
              : parseInt(endTime % 60)
          }`}
        </div>
        <div className={style.controls}>
          <p className={style.volume}>
            <span onClick={() => setIsHide(!isHide)}>音量</span>
            <input
              className={isHide ? style.hide : ""}
              type="range"
              defaultValue={audio.current?.volume * 100 || 100}
              onChange={(e) => {
                audio.current.volume = e.target.value / 100;
              }}
            />
          </p>
          <p>上</p>
          <p
            onClick={() => {
              if (audio.current.paused) {
                audio.current.play();
              } else {
                audio.current.pause();
              }
            }}
          >
            {audio.current?.paused ? "播放" : "暂停"}
          </p>
          <p>下</p>
          <p>列</p>
        </div>
        <audio ref={audio} src={songUrl?.data[0]?.url}></audio>
      </div>
    </>
  );
};

export default Player;
