import Task from "./Task";
import styles from "../styles/TaskGrouper.module.scss";
import ChevronSVG from "../../public/assets/chevron-down.svg";
import PinSVG from "../../public/assets/pin-outline.svg";
import { useState } from "react";

const TaskGrouper = ({ name, open, tasks }) => {
  const [showTasks, setShowTasks] = useState(open);

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
        <h2>{name}</h2>
      </button>
      {showTasks && (
        <div className={styles.taskContainer}>
          {tasks &&
            tasks.map((task) => {
              return <Task key={task.id} task={task} />;
            })}
        </div>
      )}
    </div>
  );
};

export default TaskGrouper;
