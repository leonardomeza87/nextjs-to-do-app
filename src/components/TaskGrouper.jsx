import Task from "./Task";
import styles from "../styles/TaskGrouper.module.scss";
import ChevronSVG from "../../public/assets/chevron-down.svg";
import PinSVG from "../../public/assets/pin-outline.svg";

const TaskGrouper = () => {
  return (
    <div className={styles.container}>
      <button>
        <div>
          <ChevronSVG />
        </div>
        {/* <span>
          <PinSVG />
        </span> */}
        <h2>Group</h2>
      </button>
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
    </div>
  );
};

export default TaskGrouper;
