import React, { useMemo, useRef, useState } from "react";

const useTimeCountDown = (initTime?: number) => {
  const [curTime, setCurTime] = useState(initTime);
  const timer = useRef<number>();
  const text = useMemo(() => {
    if (!curTime) return `00:00:00`
    const h = Math.floor(curTime / 1000/ 3600);
    const m = Math.floor(curTime / 1000/ 60 % 60)
    const s = Math.floor(curTime / 1000 % 60)
    return `${ h < 10 ? "0" + h : h}:${ m < 10 ? "0" + m : m}:${ s < 10 ? "0" + s : s}`;
  }, [curTime]);


  const curTimeRef = useRef(curTime)

  const start = () => {
    if (timer.current) return;
    timer.current = setInterval(() => {
      setCurTime((prev = 0) => {
        if (prev - 1000 < 0) {
          stop();
          return 0;
        }
        return prev - 1000;
      });
    }, 1000);
  };

  const setNewTime = (time: number) => {
    stop()
    curTimeRef.current = time
    setCurTime(time);
  };

  const stop = () => {
    clearInterval(timer.current);
  };

  return {
    text,
    start,
    stop,
    setNewTime,
    curTime
  };
};

export default useTimeCountDown;
