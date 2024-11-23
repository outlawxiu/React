import React, { useState } from "react";
import { Space } from "antd";
import { MinusSquareOutlined, PlusSquareOutlined } from "@ant-design/icons";
import "./Aside.module.scss";
const Aside = (props) => {
  const [show, setShow] = useState(true);
  return (
    <aside>
      <h3 onClick={() => setShow(!show)}>
        <Space>
          <span>常见题型</span>
          {show ? (
            <MinusSquareOutlined style={{ color: "orange" }} />
          ) : (
            <PlusSquareOutlined style={{ color: "orange" }} />
          )}
        </Space>
      </h3>
      <ul style={show ? { height: 100 } : { height: 0, overflow: "hidden" }}>
        <li
          onClick={() => {
            const newArr = [...props.paperItem.questions];
            newArr.push({
              questionId: Date.now(),
              question: "单选题",
              options: [
                {
                  option: "默认选项",
                  optionId: 1,
                },
              ],
              answer: 1,
              questionType: "单选",
            });
            props.setPaperItem((prev) => ({ ...prev, questions: newArr }));
          }}
        >
          <Space> ◉ 单选题 </Space>
        </li>
        <li
          onClick={() => {
            const newArr = [...props.paperItem.questions];
            newArr.push({
              questionId: Date.now(),
              question: "多选题",
              options: [
                {
                  option: "默认选项",
                  optionId: 1,
                },
              ],
              answer: [1],
              questionType: "多选",
            });
            props.setPaperItem((prev) => ({ ...prev, questions: newArr }));
          }}
        >
          <Space> ▣ 多选题 </Space>
        </li>
        <li
          onClick={() => {
            const newArr = [...props.paperItem.questions];
            newArr.push({
              questionId: Date.now(),
              question: "填空题",
              options: "",
              answer: 1,
              questionType: "填空",
            });
            props.setPaperItem((prev) => ({ ...prev, questions: newArr }));
          }}
        >
          <Space> () 填空题</Space>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
