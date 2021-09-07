import styles from "../styles/TaskGrouperContainer.module.scss";

import TaskGrouper from "./TaskGrouper";

import { useEffect, useState } from "react";

const TaskGrouperContainer = ({ filteredTasks }) => {
  const [pinnedTasks, setPinnedTasks] = useState([]);
  const [unpinnedTasks, setUnpinnedTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    let aa = [];
    let bb = [];
    let cc = [];

    filteredTasks.forEach((task) => {
      if (task.completed) {
        aa.push(task);
      } else if (task.pinned) {
        bb.push(task);
      } else {
        cc.push(task);
      }
    });

    setCompletedTasks([...aa]);
    setPinnedTasks([...bb]);
    setUnpinnedTasks([...cc]);
  }, [filteredTasks]);

  return (
    <div className={styles.tasksContainer}>
      <div className={styles.tasksContainer2}>
        {pinnedTasks.length > 0 && (
          <TaskGrouper name="Pinned" open={true} tasks={pinnedTasks} />
        )}

        {unpinnedTasks.length > 0 && (
          <TaskGrouper name="Unordered" open={true} tasks={unpinnedTasks} />
        )}

        {completedTasks.length > 0 && (
          <TaskGrouper name="Completed" open={true} tasks={completedTasks} />
        )}
      </div>
    </div>
  );
};

export default TaskGrouperContainer;
