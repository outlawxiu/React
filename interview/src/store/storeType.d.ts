export interface question {
  questionId: number;
  question: string;
  options?: { label: string; value: string }[];
  answer: string | string[];
  questionType: "FillBlank" | "SingleChoice" | "MultipleChoice";
  keywords?: string[];
}

export interface bank {
  [key: string]: {
    questions: question[];
  };
}
