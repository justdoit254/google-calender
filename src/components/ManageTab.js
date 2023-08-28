import {
  StyledManagedTab,
  Top,
  Task,
  DescriptionImage,
} from "./styles/manageTab.styles";
import { useDispatch, useSelector } from "react-redux";
import {
  changeColor,
  changeIsActive,
  changeTitle,
  changeDiscription,
} from "../store";

const ManageTab = (props) => {
  const dispatch = useDispatch();
  const { isActive, dates } = useSelector((state) => {
    return {
      isActive: state.date.isActive,
      dates: state.date.dates,
    };
  });

  const styles = {
    display: isActive ? "block" : "none",
  };

  const handleExit = () => {
    console.log("handle exit!");
    dispatch(changeIsActive(false));
    const updated = dates.map((date) => {
      return date.id === props.id ? { ...date, on: false } : date;
    });
    dispatch(changeColor(updated));
  };
  const handleTitleChange = (event) => {
    console.log(event.target.value);
    const updated = dates.map((date) => {
      return date.id === props.id
        ? { ...date, title: event.target.value }
        : date;
    });
    dispatch(changeTitle(updated));
  };
  const handleDescriptionChange = (event) => {
    console.log(event.target.value);
    const updated = dates.map((date) => {
      return date.id === props.id
        ? { ...date, description: event.target.value }
        : date;
    });
    dispatch(changeDiscription(updated));
  };

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(changeIsActive(false));
    const updated = dates.map((date) => {
      return date.id === props.id ? { ...date, on: false } : date;
    });
    dispatch(changeColor(updated));
  }
  return (
    <>
      {/* ManageTab will open only if "isActive" state is true */}
      {isActive && (
        <StyledManagedTab>
          <Top>
            <span>Task</span>
            <img
              src="./images/cross-icon.png"
              alt="Exit"
              onClick={handleExit}
            />
          </Top>
          <Task onSubmit={handleSubmit}>
            <label>
              <input
                type="text"
                placeholder="Add title"
                name="title"
                value={dates[props.id].title}
                onChange={handleTitleChange}
              />
            </label>
            <label>
              <DescriptionImage
                src="./images/description-icon.png"
                alt="Description"
              />
              <textarea
                placeholder="Add description"
                name="description"
                value={dates[props.id].description}
                onChange={handleDescriptionChange}
              />
            </label>
            <button>Save</button>
          </Task>
        </StyledManagedTab>
      )}
      <div></div>
    </>
  );
};

export default ManageTab;
