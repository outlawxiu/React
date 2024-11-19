import { useEffect, useRef, useState } from "react";
import axios from "axios";
axios.defaults.baseURL = "https://zyxcl.xyz/music/api";
export const useFetch = ({ url, immediate, params = {} }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const timer = useRef(null);

  const refresh = (params) => {
    if (timer.current) clearTimeout(timer.current); 
    setLoading(true);
    timer.current = setTimeout(async () => {
      try {
        const back = await axios.get(url, { params });
        setData(back.data);
      } catch (error) {
        console.error();
      } finally {
        setLoading(false);
        timer.current = null;
      }
    }, 500);
  };

  useEffect(() => {
    if (immediate) {
      refresh(params);
    }
  }, []);

  return {
    data,
    loading,
    refresh,
  };
};

export default useFetch;
