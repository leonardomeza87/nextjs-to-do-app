import Task from "./Task";
import styles from "../styles/TaskGrouper.module.scss";
import ChevronSVG from "../../public/assets/chevron-down.svg";
import PinSVG from "../../public/assets/pin-outline.svg";
import { useState } from "react";

const TaskGrouper = () => {
  const [showTasks, setShowTasks] = useState(true);

  const handlShowTasks = () => {
    setShowTasks(!showTasks);
  };

  return (
    <div className={styles.container}>
      <button onClick={handlShowTasks}>
        <div>
          <ChevronSVG />
        </div>
        {/* <span>
          <PinSVG />
        </span> */}
        <h2>Group</h2>
      </button>
      {showTasks && (
        <div className={styles.taskContainer}>
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
        </div>
      )}
    </div>
  );
};

export default TaskGrouper;
