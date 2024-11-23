import React, { useState } from "react";
import style from "./Question.module.scss";
import {
  CaretUpFilled,
  CaretDownFilled,
  CopyOutlined,
  DeleteOutlined,
  PlusCircleFilled,
  DiffOutlined,
} from "@ant-design/icons";
import { Input, Tooltip, Radio, Space, Checkbox, Mentions } from "antd";

const Question = (props) => {
  // console.log(props.questionItem);
  return (
    <>
      <div className={style.whole}>
        <div className={style.left}>
          <span>Q{props.index + 1}</span>
          <Tooltip
            placement="right"
            title="上移"
            mouseEnterDelay={0}
            mouseLeaveDelay={0}
            className={style.tip}
          >
            <CaretUpFilled
              className={style.tool}
              onClick={() => {
                props.setPaperItem((prev) => {
                  const newPrev = JSON.parse(JSON.stringify(prev));
                  const index = newPrev.questions.findIndex(
                    (item) => item.questionId === props.questionItem.questionId
                  );
                  if (index > -1) {
                    if (index === 0) {
                      alert("已经是第一个了");
                    } else {
                      newPrev.questions.splice(
                        index - 1,
                        0,
                        ...newPrev.questions.splice(index, 1)
                      );
                    }
                  }
                  return newPrev;
                });
              }}
            />
          </Tooltip>
          <Tooltip
            placement="right"
            title="下移"
            mouseEnterDelay={0}
            mouseLeaveDelay={0}
            className={style.tip}
          >
            <CaretDownFilled
              className={style.tool}
              onClick={() => {
                props.setPaperItem((prev) => {
                  const newPrev = JSON.parse(JSON.stringify(prev));
                  const index = newPrev.questions.findIndex(
                    (item) => item.questionId === props.questionItem.questionId
                  );
                  if (index > -1) {
                    if (index === newPrev.questions.length - 1) {
                      alert("已经是最后一个了");
                    } else {
                      newPrev.questions.splice(
                        index + 1,
                        0,
                        ...newPrev.questions.splice(index, 1)
                      );
                    }
                  }
                  return newPrev;
                });
              }}
            />
          </Tooltip>
          <Tooltip
            placement="right"
            title="复制"
            mouseEnterDelay={0}
            mouseLeaveDelay={0}
            className={style.tip}
          >
            <CopyOutlined
              className={style.tool}
              onClick={() => {
                props.setPaperItem((prev) => {
                  const newPrev = JSON.parse(JSON.stringify(prev));
                  const index = newPrev.questions.findIndex(
                    (item) => item.questionId === props.questionItem.questionId
                  );
                  if (index > -1) {
                    newPrev.questions.splice(
                      index + 1,
                      0,
                      ...newPrev.questions
                        .slice(index, index + 1)
                        .map((item) => ({ ...item, questionId: Date.now() }))
                    );
                  }
                  return newPrev;
                });
              }}
            />
          </Tooltip>
          <Tooltip
            placement="right"
            title="删除"
            mouseEnterDelay={0}
            mouseLeaveDelay={0}
            className={style.tip}
          >
            <DeleteOutlined
              className={style.tool}
              onClick={() => {
                props.setPaperItem((prev) => {
                  const newPrev = JSON.parse(JSON.stringify(prev));
                  const index = newPrev.questions.findIndex(
                    (item) => item.questionId === props.questionItem.questionId
                  );
                  if (index > -1) {
                    newPrev.questions.splice(index, 1);
                  }
                  return newPrev;
                });
              }}
            />
          </Tooltip>
        </div>
        <div className={style.right}>
          <div className={style.question}>
            <Input
              value={props.questionItem.question}
              onChange={(e) => {
                props.setPaperItem((prev) => {
                  const newPrev = JSON.parse(JSON.stringify(prev));
                  const index = newPrev.questions.findIndex(
                    (item) => item.questionId === props.questionItem.questionId
                  );
                  if (index > -1) {
                    newPrev.questions[index].question = e.target.value;
                  }
                  return newPrev;
                });
              }}
              variant="filled"
              className={style.input}
            />
          </div>

          {
            // 单选
            props.questionItem.questionType === "单选" && (
              <>
                <div className={style.options}>
                  <Radio.Group
                    value={props.questionItem.answer}
                    onChange={(e) => {
                      props.setPaperItem((prev) => {
                        const newPrev = JSON.parse(JSON.stringify(prev));
                        const index = newPrev.questions.findIndex(
                          (item) =>
                            item.questionId === props.questionItem.questionId
                        );
                        if (index > -1) {
                          newPrev.questions[index].answer = e.target.value;
                        }
                        return newPrev;
                      });
                    }}
                    block
                  >
                    <Space direction="vertical" style={{ width: "100%" }}>
                      {props.questionItem.options.map((item) => (
                        <Radio
                          key={item.optionId}
                          value={item.optionId}
                          className={style.radio}
                        >
                          <Input
                            value={item.option}
                            onChange={(e) => {
                              props.setPaperItem((prev) => {
                                const newPrev = JSON.parse(
                                  JSON.stringify(prev)
                                );
                                const index = newPrev.questions.findIndex(
                                  (item) =>
                                    item.questionId ===
                                    props.questionItem.questionId
                                );
                                if (index > -1) {
                                  const optionIndex = newPrev.questions[
                                    index
                                  ].options.findIndex(
                                    (option) =>
                                      option.optionId === item.optionId
                                  );
                                  if (optionIndex > -1) {
                                    newPrev.questions[index].options[
                                      optionIndex
                                    ].option = e.target.value;
                                  }
                                }
                                return newPrev;
                              });
                            }}
                            variant="filled"
                            className={style.input}
                          />
                        </Radio>
                      ))}
                    </Space>
                  </Radio.Group>
                </div>
                <div className={style.controls}>
                  <Tooltip
                    placement="top"
                    title="添加"
                    mouseEnterDelay={0}
                    mouseLeaveDelay={0}
                    className={style.tip}
                  >
                    <PlusCircleFilled
                      className={style.tool}
                      onClick={() => {
                        props.setPaperItem((prev) => {
                          const newPrev = JSON.parse(JSON.stringify(prev));
                          const index = newPrev.questions.findIndex(
                            (item) =>
                              item.questionId === props.questionItem.questionId
                          );
                          if (index > -1) {
                            newPrev.questions[index].options.push({
                              option: "默认选项",
                              optionId: Date.now(),
                            });
                          }
                          return newPrev;
                        });
                      }}
                    />
                  </Tooltip>
                  <Tooltip
                    placement="top"
                    title="添加解析"
                    mouseEnterDelay={0}
                    mouseLeaveDelay={0}
                    className={style.tip}
                  >
                    <DiffOutlined className={style.tool} />
                  </Tooltip>
                </div>
              </>
            )
          }

          {
            // 多选
            props.questionItem.questionType === "多选" && (
              <>
                <div className={style.options}>
                  {
                    <Checkbox.Group
                      value={props.questionItem.answer}
                      onChange={(e) => {
                        props.setPaperItem((prev) => {
                          const newPrev = JSON.parse(JSON.stringify(prev));
                          const index = newPrev.questions.findIndex(
                            (item) =>
                              item.questionId === props.questionItem.questionId
                          );
                          if (index > -1) {
                            newPrev.questions[index].answer = e;
                          }
                          return newPrev;
                        });
                      }}
                    >
                      <Space
                        direction="vertical"
                        style={{ width: "100%", height: "100%" }}
                      >
                        {props.questionItem.options.map((item) => (
                          <Checkbox
                            key={item.optionId}
                            value={item.optionId}
                            className={style.radio}
                          >
                            <Input
                              value={item.option}
                              onChange={(e) => {
                                props.setPaperItem((prev) => {
                                  const newPrev = JSON.parse(
                                    JSON.stringify(prev)
                                  );
                                  const index = newPrev.questions.findIndex(
                                    (item) =>
                                      item.questionId ===
                                      props.questionItem.questionId
                                  );
                                  if (index > -1) {
                                    const optionIndex = newPrev.questions[
                                      index
                                    ].options.findIndex(
                                      (option) =>
                                        option.optionId === item.optionId
                                    );
                                    if (optionIndex > -1) {
                                      newPrev.questions[index].options[
                                        optionIndex
                                      ].option = e.target.value;
                                    }
                                  }
                                  return newPrev;
                                });
                              }}
                              variant="filled"
                              className={style.input}
                            />
                          </Checkbox>
                        ))}
                      </Space>
                    </Checkbox.Group>
                  }
                </div>
                <div className={style.controls}>
                  <Tooltip
                    placement="top"
                    title="添加"
                    mouseEnterDelay={0}
                    mouseLeaveDelay={0}
                    className={style.tip}
                  >
                    <PlusCircleFilled
                      className={style.tool}
                      onClick={() => {
                        props.setPaperItem((prev) => {
                          const newPrev = JSON.parse(JSON.stringify(prev));
                          const index = newPrev.questions.findIndex(
                            (item) =>
                              item.questionId === props.questionItem.questionId
                          );
                          if (index > -1) {
                            newPrev.questions[index].options.push({
                              option: "默认选项",
                              optionId: Date.now(),
                            });
                          }
                          return newPrev;
                        });
                      }}
                    />
                  </Tooltip>
                  <Tooltip
                    placement="top"
                    title="添加解析"
                    mouseEnterDelay={0}
                    mouseLeaveDelay={0}
                    className={style.tip}
                  >
                    <DiffOutlined className={style.tool} />
                  </Tooltip>
                </div>
              </>
            )
          }
          {
            //填空
            props.questionItem.questionType === "填空" && (
              <>
                <div className={style.options}>
                  <Mentions
                    autoSize={{ minRows: 5, maxRows: 99 }}
                    variant="filled"
                    className={style.input}
                    value={props.questionItem.options}
                    onChange={(e) => {
                      props.setPaperItem((prev) => {
                        const newPrev = JSON.parse(JSON.stringify(prev));
                        const index = newPrev.questions.findIndex(
                          (item) =>
                            item.questionId === props.questionItem.questionId
                        );
                        if (index > -1) {
                          newPrev.questions[index].options = e;
                        }
                        return newPrev;
                      });
                    }}
                  />
                </div>
              </>
            )
          }
        </div>
      </div>
    </>
  );
};

export default Question;
