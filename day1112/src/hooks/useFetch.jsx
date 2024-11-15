import React, { useEffect, useState } from "react";
import axios from "axios";
export const useFetch = ({ url, immediate, params = {} }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const refresh = async (params) => {
    try {
      setLoading(true);
      const back = await axios.get(url, { params });
      setData(back.data);
    } catch (error) {
      console.error();
    } finally {
      setLoading(false);
    }
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
