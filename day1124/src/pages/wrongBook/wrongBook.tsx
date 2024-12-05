import { useAppSelector } from "../../hooks/storeHook";
import React, { useEffect } from "react";
import style from "../exam/exam.module.scss";
import { Radio, Space } from "antd";
const wrongBook = () => {
  const wrong = useAppSelector((state) => state.papers.wrong);
  return (
    <div className={style.whole}>
      <div className={style.questions}>
        {wrong.map((item, index) => (
          <div className={style.question} key={index} id={`${index}`}>
            <div className={style.left}>
              <span>{index + 1}</span>
            </div>
            <div className={style.right}>
              <h3>{item.question}</h3>
              <Radio.Group value={item.result}>
                <Space direction="vertical">
                  {item.options.map((option, optionIndex) => (
                    <Radio
                      key={optionIndex}
                      value={(optionIndex + 10).toString(16).toUpperCase()}
                    >
                      {option}
                    </Radio>
                  ))}
                </Space>
              </Radio.Group>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default wrongBook;
