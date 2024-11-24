import React from "react";
import "./home.module.scss";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/storeHook";
import { Space, Table } from "antd";
import type { TableProps } from "antd";
import { useAppDispatch } from "../../hooks/storeHook";
import { delPaper } from "../../store/papers";

interface DataType {
  paperId: number;
  grade: string;
  subject: string;
  paperType: string;
  knowledge: string;
}

const home = () => {
  const dispatch = useAppDispatch();
  const columns: TableProps<DataType>["columns"] = [
    {
      dataIndex: "key",
      rowScope: "row",
      render(value, record, index) {
        return index + 1;
      },
    },
    {
      title: "序号",
      dataIndex: "paperId",
      key: "paperId",
    },
    {
      title: "年级",
      dataIndex: "grade",
      key: "grade",
    },
    {
      title: "科目",
      dataIndex: "subject",
      key: "subject",
    },
    {
      title: "类别",
      dataIndex: "paperType",
      key: "paperType",
    },
    {
      title: "知识点",
      dataIndex: "knowledge",
      key: "knowledge",
    },
    {
      title: "操作",
      key: "action",
      render: (value, record) => (
        <Space size="middle">
                    <Link to={`/preview?id=${record.paperId}`}>
                    <Button type="primary">预览</Button>
          </Link>

          <Link to={`/create?id=${record.paperId}`}>
            <Button>编辑</Button>
          </Link>
          <Button
            type="primary"
            danger
            onClick={() => {
              dispatch(delPaper({ paperId: record.paperId }));
            }}
          >
            删除
          </Button>
        </Space>
      ),
    },
  ];

  const list = useAppSelector<DataType[]>((state) => state.papers.list);
  return (
    <div>
      <Table<DataType>
        pagination={false}
        rowKey="paperId"
        columns={columns}
        dataSource={list}
      />
      <Link to="/create">
        <Button type="primary">添加</Button>
      </Link>
    </div>
  );
};

export default home;
