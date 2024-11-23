import { createSlice } from "@reduxjs/toolkit";

// enum questionType{

// }

// interface question {
//   question:string,
//   options: string[],
//   keywords:string[],
//   answer:string[],
//   questionType:questionType
// }

export const papers = createSlice({
  name: "papers",
  initialState: {
    list: [
      {
        paperId: 114514,
        grade: "高中",
        subject: "语文",
        paperType: "高考题",
        knowledge: "JavaScript",
        title: "大标题",
        subTitle: "小标题",
        questions: [
          {
            questionId: 1,
            question: "ReturnType<T>",
            options: [
              {
                option: "ReturnType<T> 用于获取函数类型 T 的返回类型",
                optionId: 1,
              }
            ],
            answer: 1,
            questionType: "单选",
          },
          {
            questionId: 2,
            question: "any、void、never、unknown",
            options: [
              { option: "any:任意类型,相当于放弃了类型校验", optionId: 1 },
              {
                option: "void:没有任何类型(函数没有返回值时使用)",
                optionId: 2,
              },
              { option: "never:不可能存在的值", optionId: 3 },
              {
                option:
                  "unknown:暂时不确定是什么类型(当你暂时不知道是什么数据类型但需要往下进行时,或者因为逻辑分支产生不同数据类型的结果时 暂时定义为 unknown)",
                optionId: 4,
              },
            ],
            answer: [2,4],
            questionType: "多选",
          },
          {
            questionId: 3,
            question: "联合类型",
            options: "",
            answer: [
              "定义:当一个变量的类型是多种类型中的其中一种时,通过使用|可以将多个类型组合在一起",
              "注意:当一个变量是联合类型时,只能访问联合类型的所有类型都拥有的属性或方法",
            ],
            questionType: "填空",
          },
        ],
      },
    ],
  },
  reducers: {
    editList(state, action) {
      const index = state.list.findIndex(
        (item) => item.paperId === action.payload.paperId
      );
      if (index > -1) {
        state.list.splice(index, 1, action.payload.paperItem);
      }
    },
    pushList(state, action) {
      state.list.push(action.payload.paperItem);
    },
    delPaper(state, action) {
      const index = state.list.findIndex(
        (item) => item.paperId === action.payload.paperId
      );
      if (index > -1) {
        state.list.splice(index, 1);
      } else {
        alert("要删除的数据不存在");
      }
    },
  },
});
export const { editList, pushList, delPaper } = papers.actions;

export default papers.reducer;
