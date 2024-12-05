import React, { useEffect, useState } from "react";
import style from "./paper.module.scss";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch , useAppSelector } from '../../hooks/storeHook'
// type:题型 单选 多选 填空
// sector : React TypeScript
// paper : 随机试卷
interface paprams {
  type?: string;
  sector?: string;
  paper?: boolean;
}
const paper = () => {
  const [getParams] = useSearchParams()
  const [paper, setPaper] = useState([]);

  useEffect(() => {
    console.log(getParams.get('paper') ?? 1);
    console.log(getParams.get('sector'));
    console.log(getParams.get('type'));
    
  }, []);
  return <div className={style.whole}>考试页面</div>;
};

export default paper;
