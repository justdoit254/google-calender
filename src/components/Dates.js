import ManageTab from "./ManageTab";
import { Date } from "./styles/main.styles";

const Dates = (props) => {
  // Do we have to do the same for adding dynamic styles with classes
  const styles = {
    backgroundColor: props.on ? "rgba(218, 220, 224, 0.3)" : "white",
  };
  return (
    <>
      <Date
        style={styles}
        onClick={(event) => {
          !props.isActive && props.toggle();
          // console.log(`X: ${event.clientX}`);
          // console.log(`Y: ${event.clientY}`);
        }}
      >
        {props.exactDate}
        {props.on && <ManageTab on={props.on} id={props.id} />}
      </Date>
    </>
  );
};

export default Dates;
