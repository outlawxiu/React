import React, { useEffect, useRef, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import style from "./player.module.scss";
import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";
import { useAudioStore } from "../../store/audio";
const Player = () => {
  const {
    url,
    setUrl,
    currentTime,
    changeCurrentTime,
    duration,
    volume,
    changeVolume,
    isPlay,
    playOrPause,
  } = useAudioStore();
  const [isHide, setIsHide] = useState(true);
  const [searchParams] = useSearchParams();
  const scroll = useRef();
  const avator = useRef();

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
    if (songUrl?.data[0]) {
      if (url !== songUrl.data[0].url) {
        setUrl(() => songUrl.data[0].url);
      }
    }
  }, [songUrl]);

  useEffect(() => {
    scroll.current.scrollTop =
      document.querySelector(`.${style.now}`)?.offsetTop - 60;
    if (!isPlay) {
      avator.current.classList.remove(style.running);
    } else {
      avator.current.classList.add(style.running);
    }
  }, [currentTime]);

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
              key={item.time+item.text}
              className={
                currentTime >= item.time &&
                currentTime <= (songWords[index + 1]?.time || 999)
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
            parseInt(currentTime / 60) < 10
              ? "0" + parseInt(currentTime / 60)
              : parseInt(currentTime / 60)
          } : ${
            parseInt(currentTime % 60) < 10
              ? "0" + parseInt(currentTime % 60)
              : parseInt(currentTime % 60)
          }`}
          <input
            type="range"
            value={(currentTime / duration) * 100 || 0}
            onChange={(e) => {
              changeCurrentTime(e.target.value);
            }}
          />
          {`${
            parseInt(duration / 60) < 10
              ? "0" + parseInt(duration / 60)
              : parseInt(duration / 60)
          } : ${
            parseInt(duration % 60) < 10
              ? "0" + parseInt(duration % 60)
              : parseInt(duration % 60)
          }`}
        </div>
        <div className={style.controls}>
          <p className={style.volume}>
            <span onClick={() => setIsHide(!isHide)}>音量</span>
            <input
              className={isHide ? style.hide : ""}
              type="range"
              defaultValue={volume * 100 || 100}
              onChange={(e) => {
                changeVolume(e.target.value);
              }}
            />
          </p>
          <p>上</p>
          <p onClick={playOrPause}>
            {!isPlay ? (
              <svg
                t="1731999322130"
                className="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2901"
                width="22"
                height="22"
              >
                <path
                  d="M121.3 676.4m-40.9 0a40.9 40.9 0 1 0 81.8 0 40.9 40.9 0 1 0-81.8 0Z"
                  fill="#e0e0e0"
                  p-id="2902"
                ></path>
                <path
                  d="M266.5 851.6m-40.9 0a40.9 40.9 0 1 0 81.8 0 40.9 40.9 0 1 0-81.8 0Z"
                  fill="#e0e0e0"
                  p-id="2903"
                ></path>
                <path
                  d="M512 31.6C252.8 31.6 42.6 241.7 42.6 501c0 69 14.9 134.6 41.7 193.6l74.2-35.4c-21.7-48.3-33.7-101.8-33.7-158.2 0-213.8 173.3-387.2 387.2-387.2S899.2 287.1 899.2 501 725.8 888.1 512 888.1c-81.9 0-157.9-25.4-220.4-68.8l-51.2 57.2c1.5 0.7 2.5 2.1 2.5 3.6s0.3 3.2-1.2 3.9c76.7 54.5 169.2 86.2 270.4 86.2 259.2 0 469.4-210.1 469.4-469.4S771.2 31.6 512 31.6z"
                  fill="#e0e0e0"
                  p-id="2904"
                ></path>
                <path
                  d="M379.9 348.8c11.3-19.6 36.4-26.3 55.9-15l226.6 130.9c19.6 11.3 26.3 36.4 15 55.9-11.3 19.6-36.4 26.3-55.9 15L394.9 404.7c-19.6-11.3-26.3-36.3-15-55.9z"
                  fill="#e0e0e0"
                  p-id="2905"
                ></path>
                <path
                  d="M416.2 328.3c22.6 0 41 18.3 41 41V631c0 22.6-18.3 41-41 41-22.6 0-41-18.3-41-41V369.2c0-22.6 18.4-40.9 41-40.9z"
                  fill="#e0e0e0"
                  p-id="2906"
                ></path>
                <path
                  d="M677.5 478.6c11.5 19.5 5.1 44.6-14.4 56.1L437.8 667.9c-19.5 11.5-44.6 5.1-56.1-14.4s-5.1-44.6 14.4-56.1l225.3-133.2c19.5-11.5 44.6-5 56.1 14.4z"
                  fill="#e0e0e0"
                  p-id="2907"
                ></path>
              </svg>
            ) : (
              <svg
                t="1731999277948"
                className="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2398"
                width="22"
                height="22"
              >
                <path
                  d="M121.3 680.4m-40.9 0a40.9 40.9 0 1 0 81.8 0 40.9 40.9 0 1 0-81.8 0Z"
                  fill="#e0e0e0"
                  p-id="2399"
                ></path>
                <path
                  d="M266.5 855.6m-40.9 0a40.9 40.9 0 1 0 81.8 0 40.9 40.9 0 1 0-81.8 0Z"
                  fill="#e0e0e0"
                  p-id="2400"
                ></path>
                <path
                  d="M512 35.6C252.8 35.6 42.6 245.7 42.6 505c0 69 14.9 134.6 41.7 193.6l74.2-35.4c-21.7-48.3-33.7-101.8-33.7-158.2 0-213.8 173.3-387.2 387.2-387.2S899.2 291.1 899.2 505 725.8 892.1 512 892.1c-81.9 0-157.9-25.4-220.4-68.8l-51.2 57.2c1.5 0.7 2.5 2.1 2.5 3.6s0.3 3.2-1.2 3.9c76.7 54.5 169.2 86.2 270.4 86.2 259.2 0 469.4-210.1 469.4-469.4S771.2 35.6 512 35.6z"
                  fill="#e0e0e0"
                  p-id="2401"
                ></path>
                <path
                  d="M419.9 329.1c22.6 0 41 18.3 41 41v261.7c0 22.6-18.3 41-41 41-22.6 0-41-18.3-41-41V370.1c0-22.6 18.4-41 41-41zM610.9 329.1c22.6 0 41 18.3 41 41v261.7c0 22.6-18.3 41-41 41-22.6 0-41-18.3-41-41V370.1c0-22.6 18.4-41 41-41z"
                  fill="#e0e0e0"
                  p-id="2402"
                ></path>
              </svg>
            )}
          </p>
          <p>下</p>
          <p>列</p>
        </div>
      </div>
    </>
  );
};

export default Player;
