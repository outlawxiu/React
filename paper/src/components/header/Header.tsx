import React, { useState } from "react";
import { Form, Select, Card } from "antd";
import "./Header.module.scss";
const Header = (props) => {
  const [form] = Form.useForm()
  return (
    <Card
      title="丨 教师出题"
      bordered={false}
      style={{ width: 1000, borderRadius: 0 }}
    >
      <Form
        layout="inline"
        initialValues={props.paperItem}
        form={form}
        onValuesChange={() => {
          props.setPaperItem((prev) =>{
            return {
              ...prev,
              ...form.getFieldValue()
            }
          });
        }}
      >
        <Form.Item label="年级" name="grade">
          <Select
            style={{ width: 120 }}
            options={[
              { value: "高中", label: "高中" },
              { value: "初中", label: "初中" },
            ]}
          />
        </Form.Item>
        <Form.Item label="学科" name="subject">
          <Select
            style={{ width: 120 }}
            options={[
              { value: "语文", label: "语文" },
              { value: "数学", label: "数学" },
              { value: "英语", label: "英语" },
            ]}
          />
        </Form.Item>
        <Form.Item label="题类" name="paperType">
          <Select
            style={{ width: 120 }}
            options={[
              { value: "高考题", label: "高考题" },
              { value: "中考题", label: "中考题" },
            ]}
          />
        </Form.Item>
        <Form.Item label="知识点" name="knowledge">
          <Select
            style={{ width: 120 }}
            options={[
              { value: "JavaScript", label: "JavaScript" },
              { value: "React", label: "React" },
              { value: "Vue2", label: "Vue2" },
              { value: "Vue3", label: "Vue3" },
              { value: "TypeScript", label: "TypeScript" },
              { value: "webpack", label: "webpack" },
            ]}
          />
        </Form.Item>
      </Form>
    </Card>
  );
};

export default Header;
