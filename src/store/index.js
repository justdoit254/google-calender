import { configureStore } from "@reduxjs/toolkit";
import {
  changeIsActive,
  changeColor,
  changeTitle,
  changeDiscription,
  dateReducer,
} from "./dateSlice";

const store = configureStore({
  reducer: {
    date: dateReducer,
  },
});

export {
  store,
  changeIsActive,
  changeColor,
  changeTitle,
  changeDiscription,
  dateReducer,
};
