import React, { useEffect, useState } from "react";
import style from "./create.module.scss";
import Header from "../../components/header/Header";
import Aside from "../../components/aside/Aside";
import PaperMain from "../../components/paperMain/PaperMain";
import { Button } from "antd";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHook";
import { editList, pushList } from "../../store/papers";

interface question{
  questionId: number;
  question: string;
  options: {
      option: string;
      optionId: number;
  }[] |string;
  answer: number | number[];
  questionType: string;
}
interface paperItem {
  paperId:number,
  grade: string,
  subject: string,
  paperType: string,
  knowledge: string,
  title: string,
  subTitle: string,
  questions: question[],
}

const create = () => {
  const navigate = useNavigate();
  const paperList = useAppSelector<Partial<paperItem>[]>((store) => store.papers.list);
  const dispatch = useAppDispatch();
  const [getSearchParams] = useSearchParams();
  const [id, setId] = useState(Number(getSearchParams.get("id")));
  const [paperItem, setPaperItem] = useState<Partial<paperItem>>({
    grade: "高中",
    subject: "语文",
    paperType: "高考题",
    knowledge: "JavaScript",
    title: "大标题",
    subTitle: "小标题",
    questions: [],
  });

  useEffect(() => {
    if (id) {
      setId(id);
      const index = paperList.findIndex((item) => item.paperId === id);
      if (index > -1) {
        setPaperItem({ ...paperList[index] });
      } else {
        alert("数据获取失败");
        navigate("/");
      }
    } else {
      setPaperItem((prev) => ({ ...prev, paperId: Date.now() }));
    }
  },[]);

  const save = () => {
    if (id) {
      dispatch(editList({ paperId: id, paperItem }));
    } else {
      dispatch(pushList({ paperItem: paperItem }));
    }
    navigate("/");
  };
  return (
    <div className={style.whole}>
      <Header
        paperItem={{
          grade: paperItem.grade,
          subject: paperItem.subject,
          paperType: paperItem.paperType,
          knowledge: paperItem.knowledge,
        }}
        setPaperItem={setPaperItem}
      ></Header>
      <div className={style.paper}>
        <div className={style.aside}>
          <Aside
            paperItem={{ questions: paperItem.questions }}
            setPaperItem={setPaperItem}
          ></Aside>
        </div>
        <div className={style.content}>
          <PaperMain
            paperItem={{
              title: paperItem.title,
              subTitle: paperItem.subTitle,
              questions: paperItem.questions,
            }}
            setPaperItem={setPaperItem}
          ></PaperMain>
          <Button type="primary" size="large" onClick={save}>
            保存试卷
          </Button>
        </div>
      </div>
    </div>
  );
};

export default create;
