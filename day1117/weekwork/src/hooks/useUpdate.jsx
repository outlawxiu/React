import React, { useEffect, useRef, useState } from "react";

export const useUpdate = (callback, deps) => {
  const isFirst = useRef(true)
  useEffect(() => {
    if (isFirst) {
      isFirst.current = false
    } else {
      return callback();
    }
  }, deps);
};

export default useUpdate;
