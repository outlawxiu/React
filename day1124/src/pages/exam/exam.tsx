import React, { useEffect, useRef, useState } from "react";
import { getUserAccount } from "../../store/paper";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHook";
import style from "./exam.module.scss";
import type { RadioChangeEvent } from "antd";
import { Radio, Space, Button, Modal, Affix, message } from "antd";
import { useNavigate } from "react-router-dom";
import { question, wrong } from "../../store/paper";
import { pushWrong } from "../../store/paper";
import useTimeCountDown from "../../hooks/useTimeCountDown";
const exam = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const paper = useAppSelector((state) => state.papers.paper);
  const [answer, setAnswer] = useState<wrong[]>([]);
  const [isSave, setIsSave] = useState(false);
  const [time, setTime] = useState(10);
  const timer = useRef<number>();
  const save = useRef<HTMLButtonElement>(null);
  const [score, setScore] = useState(0);
  const [open, setOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const { text, setNewTime, start, stop, curTime } = useTimeCountDown();

  useEffect(() => {
    dispatch(getUserAccount());
    setNewTime(5000)
    start();
    return stop;
  }, []);
  useEffect(() => {
    if (curTime === 0) {
      save.current!.click()
      stop()
    }
  }, [curTime]);

  // useEffect(() => {
  //   dispatch(getUserAccount());
  //   timer.current = setInterval(() => {
  //     setTime((prev) => prev - 1);
  //   }, 1000);
  //   return () => {
  //     clearInterval(timer.current);
  //   };
  // }, []);

  // useEffect(() => {
  //   if (time < 1) {
  //     save.current!.click();
  //     clearInterval(timer.current);
  //   }
  // }, [time]);

  useEffect(() => {
    const copy = JSON.parse(JSON.stringify(paper)).map((item: wrong) => {
      item.answer = "";
      return item;
    });
    setAnswer(copy);
  }, [paper]);

  const onChange = (e: RadioChangeEvent, index: number) => {
    if (isSave) {
      return message.error("您已提交,无法修改");
    }

    setAnswer((prev) => {
      const copy = JSON.parse(JSON.stringify(prev));
      copy[index].answer = e.target.value;
      return copy;
    });
  };

  return (
    <div className={style.whole}>
      <div className={style.header}>
        <h2>
          单选题 (共{paper.length}题,每题{"3"}分)
        </h2>
      </div>
      <div className={style.questions}>
        {answer.map((item, index) => (
          <div className={style.question} key={index} id={`${index}`}>
            <div className={style.left}>
              <span>{index + 1}</span>
            </div>
            <div className={style.right}>
              <h3>{item.question}</h3>
              <Radio.Group
                value={item.answer}
                onChange={(e) => {
                  onChange(e, index);
                }}
              >
                <Space direction="vertical">
                  {item.options.map((option, optionIndex) => (
                    <Radio
                      key={optionIndex}
                      value={(optionIndex + 10).toString(16).toUpperCase()}
                    >
                      {(optionIndex + 10).toString(16).toUpperCase()} : {option}
                    </Radio>
                  ))}
                </Space>
              </Radio.Group>
            </div>
          </div>
        ))}
      </div>
      <div className={style.answerCard}>
        <div className={style.djs}>
          <div className={style.dtk}>答题卡</div>
          <div>{text}</div>
          {/* <div>{`${
            parseInt(`${time / 3600}`) > 9
              ? parseInt(`${time / 3600}`)
              : "0" + parseInt(`${time / 3600}`)
          }:${
            parseInt(`${(time / 60) % 60}`) > 9
              ? parseInt(`${(time / 60) % 60}`)
              : "0" + parseInt(`${(time / 60) % 60}`)
          }:${
            parseInt(`${time % 60}`) > 9
              ? parseInt(`${time % 60}`)
              : "0" + parseInt(`${time % 60}`)
          }`}</div> */}
        </div>
        <div className={style.card}>
          {answer.map((item, index) => (
            <a
              href={`#${index}`}
              key={index}
              className={`${item.answer && style.active} ${
                isSave && item.answer !== item.result && style.wrong
              }`}
            >
              {index + 1}
            </a>
          ))}
        </div>
      </div>
      <div className={style.submit}>
        {isSave ? (
          <Button
            type="primary"
            danger
            onClick={() => {
              navigate("/wrong");
            }}
          >
            错题本
          </Button>
        ) : (
          <Button
            type="primary"
            ref={save}
            onClick={() => {
              setIsSave(true);
              // clearInterval(timer.current);
              stop();
              const data = answer.filter((item) => item.answer !== item.result);
              dispatch(pushWrong(data));
              const score = answer.reduce(
                (prev, item) =>
                  (prev += item.answer === item.result ? item.score : 0),
                0
              );
              setScore(score);
              setOpen(true);
            }}
          >
            交卷
          </Button>
        )}
      </div>
      <Modal
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        okText="确定"
        title="试卷已提交"
        footer={(_, { OkBtn }) => (
          <>
            <Button onClick={() => navigate("/wrong")}>查看错题</Button>
            <OkBtn />
          </>
        )}
      >
        得分:{score}分
      </Modal>
    </div>
  );
};

export default exam;
