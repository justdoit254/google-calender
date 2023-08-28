import {
  Day,
  MainDatesDiv,
  MainDaysDiv,
  StyledMain,
  TaskTitle,
  MainBox,
} from "./styles/main.styles";
import Dates from "./Dates";
import { useDispatch, useSelector } from "react-redux";
import { changeIsActive, changeColor } from "../store";
import ManageTab from "./ManageTab";

const Main = () => {
  const dispatch = useDispatch();
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const { dates, isActive } = useSelector((state) => {
    return {
      dates: state.date.dates,
      isActive: state.date.isActive,
    };
  });

  function toggle(id) {
    // METHOD 1 --> By just passing the id of date to be updated and rest is taken care by reducer
    // dispatch(changeColor(id));

    // METHOD 2 --> By updating the whole dates array in state here and just returning the new array
    const updated = dates.map((date) => {
      // return date.id === id ? { ...date, on: !date.on } : date;
      return date.id === id ? { ...date, on: true } : date;
    });
    dispatch(changeColor(updated));
    dispatch(changeIsActive(true));
    // console.log(dates);
  }

  const dayItem = days.map((item) => <Day>{item}</Day>);
  const dateItem = dates.map((item) => (
    <MainBox>
      <Dates
        key={item.id}
        id={item.id}
        on={item.on}
        toggle={() => toggle(item.id)}
        exactDate={item.exactDate}
        isActive={isActive}
      />
      {item.title && (
        <TaskTitle>
          {/* onClick={!isActive ? toggle(item.id) : undefined} */}
          {/* {item.on && <ManageTab on={item.on} id={item.id} />} */}
          <p>{item.title}</p>
        </TaskTitle>
      )}
    </MainBox>
  ));
  return (
    <StyledMain>
      <MainDaysDiv>{dayItem}</MainDaysDiv>
      <MainDatesDiv>{dateItem}</MainDatesDiv>
    </StyledMain>
  );
};

export default Main;
