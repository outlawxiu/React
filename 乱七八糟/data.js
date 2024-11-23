[
    {
        category: "",
        questions: [
            {
                question: "回流和重绘",
                answer: "",
                keywords: []
            }
        ]
    },
    {
        category: "TypeScript",
        questions: [
            {
                question: "TypeScript 的优势",
                options: ["继承了JS中所有编程类别,JS代码可在TS环境很好的运行", "类型可以一定程度上充当文档", "编辑器自动填充,自动联想,智能提示和语法错误检查", "增加了静态类型,可以在编写代码时检查语法错误,使代码质量更好,更健壮"],
                keywords: [""],
                answer: [],
                questionType: "多选"
            },
            {
                question: "interface与type的区别",
                options: ["语法和使用:interface主要用于定义对象的结构的类型;type不仅可以用于定义对象的结构,还可以用于其他基本类型(例如:基础类型,联合类型,交叉类型)", "扩展:interface支持扩展(继承),可以通过extends进行继承;type通过交叉类型(&)进行扩展", "重复声明:interfave可以重复声明,并且会自动合并;type不能重复声明,重复时会报错"],
                keywords: [""],
                answer: [],
                questionType: "多选"
            },
            {
                question: "any、void、never、unknown",
                options: ["any:任意类型,相当于放弃了类型校验", "void:没有任何类型(函数没有返回值时使用)", "never:不可能存在的值", "unknown:暂时不确定是什么类型(当你暂时不知道是什么数据类型但需要往下进行时,或者因为逻辑分支产生不同数据类型的结果时 暂时定义为 unknown)"],
                keywords: [""],
                answer: [],
                questionType: "多选"
            },
            {
                question: "联合类型",
                options: [""],
                keywords: [""],
                answer: ["定义:当一个变量的类型是多种类型中的其中一种时,通过使用|可以将多个类型组合在一起", "注意:当一个变量是联合类型时,只能访问联合类型的所有类型都拥有的属性或方法"],
                questionType: "填空"
            },
            {
                question: "交叉类型",
                options: [""],
                keywords: [""],
                answer: ["定义:交叉类型是 TypeScript 中用于将多个类型合并成一个新类型", "注意:如果参与交叉的类型中有同名属性且类型不同,交叉类型将会导致错误"],
                questionType: "填空"
            },
            {
                question: "泛型",
                options: [""],
                keywords: [""],
                answer: ["定义:泛型允许在定义函数、接口时将类型参数化,而不必预先指定具体的类型。可以理解为类型的形参,在调用函数或者接口时再传入具体的类型"],
                questionType: "填空"
            },
            {
                question: "keyof 和 typeof 关键字的作用",
                options: [""],
                keywords: [""],
                answer: ["keyof返回对象类型中的所有key组成的联合类型", "typeof 获取一个变量或对象的类型"],
                questionType: "填空"
            },
            {
                question: "Pick<T, K>",
                options: ["Pick<T, K>从某个类型T中挑选出一部分属性K,构成一个新的类型"],
                keywords: [""],
                answer: [],
                questionType: "单选"
            },
            {
                question: "Omit<T, K>",
                options: ["Omit<T, K>与Pick相反,它从某个类型T中排除指定的属性K,构成一个新的类型"],
                keywords: [""],
                answer: [],
                questionType: "单选"
            },
            {
                question: "Partial<T>",
                options: ["Partial<T>用于将某个类型的所有属性变为可选的"],
                keywords: [""],
                answer: [],
                questionType: "单选"
            },
            {
                question: "Required<T>",
                options: ["Required<T> 将某个类型的所有可选属性变为必选(required)"],
                keywords: [""],
                answer: [],
                questionType: "单选"
            },
            {
                question: "Readonly<T>",
                options: ["Readonly<T>将某个类型的所有属性变为只读的(readonly),使得这些属性不能被修改"],
                keywords: [""],
                answer: [],
                questionType: "单选"
            },
            {
                question: "Record<K, T>",
                options: ["Record<K,T>构造一个对象类型,其属性名为类型K的联合类型,属性值为类型T常用于将某些类型映射到另一个类型"],
                keywords: [""],
                answer: [],
                questionType: "单选"
            },
            {
                question: "Exclude<T, U>",
                options: ["Exclude<T, U>从类型T中排除那些可以赋值给类型U的属性.常用于过滤掉某些不需要的类型"],
                keywords: [""],
                answer: [],
                questionType: "单选"
            },
            {
                question: "Extract<T, U>",
                options: ["Extract<T, U>提取类型T中可以赋值给类型U的属性,常用于保留某些需要的类型"],
                keywords: [""],
                answer: [],
                questionType: "单选"
            },
            {
                question: "NonNullable<T>",
                options: ["NonNullable<T> 从类型 T 中排除 null 和 undefined"],
                keywords: [""],
                answer: [],
                questionType: "单选"
            },
            {
                question: "ReturnType<T>",
                options: ["ReturnType<T> 用于获取函数类型 T 的返回类型"],
                keywords: [""],
                answer: [],
                questionType: "单选"
            },
        ]
    },

]


