import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
export const getUserAccount = createAsyncThunk(
  "user/getUserAccount",
  async () => {
    const res = await axios({
      url: "https://zyxcl.xyz/exam_api/exan_data",
    });
    return res.data;
  }
);

export interface question{
  question: string,
  options: string[],
  result:string,
  score: number
}

export interface wrong{
  question: string,
  options: string[],
  result:string,
  score: number,
  answer:string
}

export const paper = createSlice({
  name: "paper",
  initialState: {
    paper: <question[]>[],
    wrong: <question[]>[],
  },
  reducers: {
    pushWrong(state,action) {
      state.wrong = state.wrong.concat(action.payload.map((item:wrong) => {
        if (!state.wrong.some( wrong => item.question === wrong.question )) {
          return {
            question:item.question,
            options: item.options,
            result:item.result,
            score: item.score,
          }
        }
      })).filter(item => item)
    },
  },
  extraReducers(builder) {
    builder.addCase(getUserAccount.fulfilled, (state, action) => {
      state.paper = action.payload;
    });
  },
});
export const { pushWrong } = paper.actions;

export default paper.reducer;
