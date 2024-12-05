import { createSlice } from "@reduxjs/toolkit";
import type { bank } from './storeType'
const bank: bank = {
  TypeScript: {
    questions: [
      {
        questionId: 1,
        question: "TypeScript 的优势",
        options: [
          {
            label: "继承了js的所有编程类型，js代码可在TS环境很好的运行",
            value: "A",
          },
          {
            label: "类型可以一定程度上充当文档",
            value: "B",
          },
          {
            label: "编辑器自动填充，自动联想，智能提示和语法错误检查",
            value: "C",
          },
          {
            label:
              "增加了静态类型，可以在编写代码时检查语法错误，减少运行时的错误，使得代码质量更好，更健壮",
            value: "D",
          },
        ],
        answer: ["A", "B", "C", "D"],
        questionType: "MultipleChoice",
      },
      {
        questionId: 2,
        question: "interface与type的区别",
        options: [
          {
            label:
              "语法和使用:\n interface主要用于定义对象的结构的类型\n type 不仅可以用于定义对象的结构，还可以用于其他类型（例如：基础类型、联合类型、交叉类型）",
            value: "A",
          },
          {
            label:
              "扩展:\n interface 支持扩展（继承），可以通过 extends 进行继承。\n type 通过交叉类型（&）进行扩展。",
            value: "B",
          },
          {
            label:
              "重复声明: \n interface 可以重复声明，并且会自动合并。\n type 不能重复声明，重复时会报错",
            value: "C",
          },
        ],
        answer: ["A", "B", "C", "D"],
        questionType: "MultipleChoice",
      },
      {
        questionId: 3,
        question: "any、void、never、unknown",
        options: [
          { label: "any:任意类型,相当于放弃了类型校验", value: "A" },
          {
            label: "void:没有任何类型(函数没有返回值时使用)",
            value: "B",
          },
          { label: "never:不可能存在的值", value: "C" },
          {
            label:
              "unknown:暂时不确定是什么类型(当你暂时不知道是什么数据类型但需要往下进行时,或者因为逻辑分支产生不同数据类型的结果时 暂时定义为 unknown)",
            value: "D",
          },
        ],
        answer: ["A", "B", "C", "D"],
        questionType: "MultipleChoice",
      },
      {
        questionId: 4,
        question: "联合类型",
        answer:
          "定义:当一个变量的类型是多种类型中的其中一种时,通过使用|可以将多个类型组合在一起,\n注意:当一个变量是联合类型时,只能访问联合类型的所有类型都拥有的属性或方法",
        questionType: "FillBlank",
        keywords: ["|", "type C = A | B"],
      },
      {
        questionId: 5,
        question: "交叉类型",
        answer: "交叉类型是 TypeScript 中用于将多个类型合并成一个新类型",
        questionType: "FillBlank",
        keywords: [
          "&",
          "type C = A & B",
          "extends",
          "interface C = A extends B",
        ],
      },
      {
        questionId: 6,
        question: "泛型",
        answer:
          "泛型允许在定义函数、接口时将类型参数化，而不必预先指定具体的类型。可以理解为类型的形参，在调用函数或者接口时再传入具体的类型。",
        questionType: "FillBlank",
        keywords: ["<>"],
      },
      {
        questionId: 7,
        question: "Pick<T, K>",
        answer:
          "Pick<T, K> 从某个类型 T 中挑选出一部分属性 K，构成一个新的类型。",
        questionType: "FillBlank",
      },
      {
        questionId: 8,
        question: "Omit<T, K>",
        answer:
          "Omit<T, K> 与 Pick 相反，它从某个类型 T 中排除指定的属性 K，构成一个新的类型。",
        questionType: "FillBlank",
      },
      {
        questionId: 9,
        question: "Partial<T>",
        answer: "Partial<T> 用于将某个类型的所有属性变为可选的。",
        questionType: "FillBlank",
      },
      {
        questionId: 10,
        question: "Required<T>",
        answer: "Required<T> 将某个类型的所有可选属性变为必选（required）。",
        questionType: "FillBlank",
      },
      {
        questionId: 11,
        question: "Readonly<T>",
        answer:
          "Readonly<T> 将某个类型的所有属性变为只读的（readonly），使得这些属性不能被修改。",
        questionType: "FillBlank",
      },
      {
        questionId: 12,
        question: "Record<K, T>",
        answer:
          "Record<K, T> 构造一个对象类型，其属性名为类型 K 的联合类型，属性值为类型 T。常用于将某些类型映射到另一个类型。",
        questionType: "FillBlank",
      },
      {
        questionId: 13,
        question: "Exclude<T, U>",
        answer:
          "Exclude<T, U> 从类型 T 中排除那些可以赋值给类型 U 的属性。常用于过滤掉某些不需要的类型。",
        questionType: "FillBlank",
      },
      {
        questionId: 14,
        question: "Extract<T, U>",
        answer:
          "Extract<T, U> 提取类型 T 中可以赋值给类型 U 的属性，常用于保留某些需要的类型。",
        questionType: "FillBlank",
      },
      {
        questionId: 15,
        question: "NonNullable<T>",
        answer: "NonNullable<T> 从类型 T 中排除 null 和 undefined。",
        questionType: "FillBlank",
      },
      {
        questionId: 16,
        question: "ReturnType<T>",
        answer: "ReturnType<T> 用于获取函数类型 T 的返回类型",
        questionType: "FillBlank",
      },
      {
        questionId: 17,
        question: "keyof 和 typeof 关键字的作用?",
        answer:
          " keyof 返回对象类型中的所有 key 组成的联合类型 \n typeof 获取一个变量或对象的类型",
        questionType: "FillBlank",
      },
    ],
  },
};

const questionBank = createSlice({
  name: "questionBank",
  initialState: { bank },
  reducers: {},
  extraReducers(builder) {
    // 异步数据
  },
});



export default questionBank.reducer