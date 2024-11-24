import React, { useEffect, useRef, useState } from "react";
import style from "./preview.module.scss";
import { useNavigate, useSearchParams, useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/storeHook";
import { Button, Descriptions } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import type { DescriptionsProps } from "antd";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const items: DescriptionsProps["items"] = [
  {
    label: "UserName",
    children: "Zhou Maomao",
  },
  {
    label: "Live",
    span: "filled", // span = 2
    children: "Hangzhou, Zhejiang",
  },
  {
    label: "Remark",
    span: "filled", // span = 3
    children: "empty",
  },
  {
    label: "Address",
    span: 1, // span will be 3 and warning for span is not align to the end
    children: "No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China",
  },
];

const preview = () => {
  const navigate = useNavigate();
  const [getParams] = useSearchParams();
  const paperList = useAppSelector((state) => state.papers.list);
  const [paper, setPaper] = useState({});
  const pageRef = useRef(null);

  useEffect(() => {
    const id = getParams.get("id");
    if (id) {
      const paper = paperList.find((item) => item.paperId === Number(id));
      if (paper) {
        setPaper(paper);
      }
    }
  }, []);
  const handleDownloadPdf = async () => {
    const pageElement = pageRef.current;
    if (pageElement) {
      const canvas = await html2canvas(pageElement);
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: [canvas.width , 1920 ],
      });
      pdf.addImage(imgData, "PNG", 0, 0, canvas.width , canvas.height);
      pdf.save("试卷.pdf");
    }
  };

  return (
    <div className={style.whole}>
      <Button
        type="primary"
        shape="round"
        icon={<DownloadOutlined />}
        onClick={handleDownloadPdf}
      >
        Download
      </Button>
      <div ref={pageRef} className={style.paper}>
        <Descriptions bordered title="试卷信息" items={items}/>
        {JSON.stringify(paper)}
      </div>
    </div>
  );
};

export default preview;
