import React from "react";
const Volume = (props) => {
  return (
    <>
      <input
        type="range"
        className="volumn"
        value={props.volume * 100}
        onChange={(e) => {
          props.setVolume(e.target.value / 100);
        }}
      ></input>
    </>
  );
};

export default Volume;
