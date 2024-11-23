import React from "react";
import style from "./PaperMain.module.scss";
import { Input, Mentions } from "antd";
import Question from "../question/Question";
function PaperMain(props) {
  return (
    <div className={style.whole}>
      <div className={style.title}>
        <Input
          value={props.paperItem.title}
          variant="filled"
          className={style.input}
          onChange={(e) => {
            props.setPaperItem((prev) => {
              return { ...prev, title: e.target.value };
            });
          }}
        />
      </div>
      <div className={style.subTitle}>
        <span></span>
        <Input
          value={props.paperItem.subTitle}
          onChange={(e) => {
            props.setPaperItem((prev) => {
              return { ...prev, subTitle: e.target.value };
            });
          }}
          variant="filled"
          className={style.input}
        />
      </div>
      <div className={style.questionList}>
        {props.paperItem.questions.map((item,index) => (
          <Question 
          key={item.questionId} 
          questionItem={item}
          setPaperItem={props.setPaperItem}
          index={index}
          ></Question>
        ))}
      </div>
    </div>
  );
}

export default PaperMain;
