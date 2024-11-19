import React, {
  useContext,
  useEffect,
  useState,
  createContext,
  useRef,
} from "react";
const audioContext = createContext();
export const useAudioStore = () => useContext(audioContext);
export const AudioProvider = (props) => {
  const timer = useRef(null);
  const audio = useRef();
  const [volume, setVolume] = useState(1);
  const [url, setUrl] = useState("");
  const [isPlay, setIsPlay] = useState(false);
  const [currentTime, setCurrentTime] = useState(
    audio.current?.currentTime || 0
  );
  const [duration, setDuration] = useState(audio.current?.duration || 0);
  const playOrPause = () => {
    if (audio.current.paused) {
      audio.current.play();
    } else {
      audio.current.pause();
    }
  };
  const onTimeUpdate = () => {
    setCurrentTime(() => audio.current.currentTime || 0);
  };
  useEffect(() => {
    audio.current.addEventListener("canplay", function () {
      setDuration(() => audio.current.duration);
      //   timer.current = setInterval(() => {
      //     setCurrentTime(() => audio.current.currentTime || 0);
      //   });
    });
    return () => {
      clearInterval(timer.current);
    };
  }, []);
  const changeVolume = value => {
    audio.current.volume = value / 100
    setVolume(() => audio.current.volume);
  }
  const changeCurrentTime = (value) => {
    audio.current.currentTime = (value / 100) * duration;
    setCurrentTime(() => audio.current.currentTime);
  };
  const storeValue = {
    url,
    setUrl,
    currentTime,
    duration,
    volume,
    changeVolume,
    isPlay,
    playOrPause,
    changeCurrentTime,
  };
  return (
    <audioContext.Provider value={storeValue}>
      {props.children}
      <audio
        ref={audio}
        src={url}
        onPlay={() => setIsPlay(true)}
        onPause={() => setIsPlay(false)}
        onTimeUpdate={onTimeUpdate}
      ></audio>
    </audioContext.Provider>
  );
};
