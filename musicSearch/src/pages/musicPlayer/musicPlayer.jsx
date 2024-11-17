import React, { useEffect, useRef, useState } from "react";

import { useFetch } from "../../hooks/useFetch";
import { useUpdate } from "../../hooks/useUpdate";

import style from "./musicPlayer.module.scss";
const musicPlayer = () => {
  const [song, setSong] = useState({});
  const [songUrl, setSongUrl] = useState("");
  const audio = useRef()
  const detail = useFetch({
    url: "/song/detail",
    params: { ids: 347230 },
    immediate: true,
  });
  const url = useFetch({
    url: "/song/url",
    params: { id: 347230 },
    immediate: true,
  });

  useEffect(() => {
    detail.data.songs?.length > 0 && setSong(detail.data.songs[0]);
    // console.log(song);
  }, [detail]);

  useEffect(() => {
    // console.log(url.data.data);
    url.data.data?.length > 0 && setSongUrl( url.data.data[0]);
  }, [song]);

  return (
    <div className={style.whole} style={{ background: "pink" }}>
      <h5>音乐播放器</h5>
      <div className={style.songName}>{song.al?.name}</div>
      <img src={song.al?.picUrl} />
      <audio ref={audio} src={songUrl.url} controls></audio>
    </div>
  );
};

export default musicPlayer;
