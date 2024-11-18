import React, { useState } from "react";
import Controller from "./components/controller/Controller";
import Keyboard from "./components/keyboard/Keyboard";

import { useFetch } from "./hooks/useFetch";
import { useUpdate } from "./hooks/useUpdate";
const App = () => {
  const [isBank, setIsBank] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isDisabled, setIsDisabled] = useState(false);
  const [nowMusic, setNowMusic] = useState("");
  const { data, loading, refresh } = useFetch({
    url: "https://zyxcl.xyz/exam_api/music/list",
    immediate: true,
  });

  return (
    <div className="whole">
      <div className="left">
        <Keyboard
          isBank={isBank}
          volume={volume}
          isDisabled={isDisabled}
          data={data}
          setNowMusic={setNowMusic}
        ></Keyboard>
      </div>
      <div className="right">
        <Controller
        isBank={isBank}
        setIsBank={setIsBank}
        volume={volume}
        setVolume={setVolume}
        isDisabled={isDisabled}
        setIsDisabled={setIsDisabled}
        nowMusic={nowMusic}
        ></Controller>
      </div>
    </div>
  );
};

export default App;
