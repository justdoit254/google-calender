import { createSlice } from "@reduxjs/toolkit";

const dateSlice = createSlice({
  name: "date",
  initialState: {
    // For false isActive state the manage tab will not open but when it's true the tab will open and if the isActive state is true than the "on" state on any date cannot be activated (turned true). This is to prevent multiple manage tab open simultaneously.
    isActive: false,
    dates: [
      {
        id: 0,
        exactDate: 30,
        on: false,
        title: "",
        description: "",
      },
      {
        id: 1,
        exactDate: 31,
        on: false,
        title: "",
        description: "",
      },
      {
        id: 2,
        exactDate: "1 Aug",
        on: false,
        title: "",
        description: "",
      },
      {
        id: 3,
        exactDate: 2,
        on: false,
        title: "",
        description: "",
      },
      {
        id: 4,
        exactDate: 3,
        on: false,
        title: "",
        description: "",
      },
      {
        id: 5,
        exactDate: 4,
        on: false,
        title: "",
        description: "",
      },
      {
        id: 6,
        exactDate: 5,
        on: false,
        title: "",
        description: "",
      },
      {
        id: 7,
        exactDate: 6,
        on: false,
        title: "",
        description: "",
      },
      {
        id: 8,
        exactDate: 7,
        on: false,
        title: "",
        description: "",
      },
      {
        id: 9,
        exactDate: 8,
        on: false,
        title: "",
        description: "",
      },
      {
        id: 10,
        exactDate: 9,
        on: false,
        title: "",
        description: "",
      },
      {
        id: 11,
        exactDate: 10,
        on: false,
        title: "",
        description: "",
      },
      {
        id: 12,
        exactDate: 11,
        on: false,
        title: "",
        description: "",
      },
      {
        id: 13,
        exactDate: 12,
        on: false,
        title: "",
        description: "",
      },
      {
        id: 14,
        exactDate: 13,
        on: false,
        title: "",
        description: "",
      },
      {
        id: 15,
        exactDate: 14,
        on: false,
        title: "",
        description: "",
      },
      {
        id: 16,
        exactDate: 15,
        on: false,
        title: "",
        description: "",
      },
      {
        id: 17,
        exactDate: 16,
        on: false,
        title: "",
        description: "",
      },
      {
        id: 18,
        exactDate: 17,
        on: false,
        title: "",
        description: "",
      },
      {
        id: 19,
        exactDate: 18,
        on: false,
        title: "",
        description: "",
      },
      {
        id: 20,
        exactDate: 19,
        on: false,
        title: "",
        description: "",
      },
      {
        id: 21,
        exactDate: 20,
        on: false,
        title: "",
        description: "",
      },
      {
        id: 22,
        exactDate: 21,
        on: false,
        title: "",
        description: "",
      },
      {
        id: 23,
        exactDate: 22,
        on: false,
        title: "",
        description: "",
      },
      {
        id: 24,
        exactDate: 23,
        on: false,
        title: "",
        description: "",
      },
      {
        id: 25,
        exactDate: 24,
        on: false,
        title: "",
        description: "",
      },
      {
        id: 26,
        exactDate: 25,
        on: false,
        title: "",
        description: "",
      },
      {
        id: 27,
        exactDate: 26,
        on: false,
        title: "",
        description: "",
      },
      {
        id: 28,
        exactDate: 27,
        on: false,
        title: "",
        description: "",
      },
      {
        id: 29,
        exactDate: 28,
        on: false,
        title: "",
        description: "",
      },
      {
        id: 30,
        exactDate: 29,
        on: false,
        title: "",
        description: "",
      },
      {
        id: 31,
        exactDate: 30,
        on: false,
        title: "",
        description: "",
      },
      {
        id: 32,
        exactDate: 31,
        on: false,
        title: "",
        description: "",
      },
      {
        id: 33,
        exactDate: "1 Sept",
        on: false,
        title: "",
        description: "",
      },
      {
        id: 34,
        exactDate: 2,
        on: false,
        title: "",
        description: "",
      },
    ],
  },
  reducers: {
    changeIsActive(state, action) {
      state.isActive = action.payload;
    },
    changeColor(state, action) {
      // WHY? When the state was only array then it was not working like the component was not re-rendering!
      // METHOD 1 --> id of clicked date will be passes as payload
      //   const updated = state.dates.map((date) => {
      //     return date.id === action.payload
      //       ? { ...date, on: !date.on }
      //       : { ...date };
      //   });
      //   state.dates = updated;

      // METHOD 2 --> payload is the new value of dates array
      state.dates = action.payload;
      //   console.log(state.dates);
    },
    changeTitle(state, action) {
      // payload is the new value of dates array
      state.dates = action.payload;
    },
    changeDiscription(state, action) {
      // payload is the new value of dates array
      state.dates = action.payload;
    },
  },
});

export const { changeIsActive, changeColor, changeTitle, changeDiscription } =
  dateSlice.actions;
export const dateReducer = dateSlice.reducer;
