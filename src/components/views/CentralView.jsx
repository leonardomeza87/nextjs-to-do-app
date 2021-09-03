import styles from "../../styles/CentralView.module.scss";

import TaskGrouper from "../TaskGrouper";
import TaskAggregator from "../TaskAggregator";
import CentralHeader from "../CentralHeader";

import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

import { UserContext } from "../../contexts/UserContext";
import { TimeContext } from "../../contexts/TimeContext";

const CentralView = () => {
  const user = useContext(UserContext);

  const { date } = useContext(TimeContext);
  const { query } = useRouter();

  //helpers
  const addDays = (date, days) => {
    var result = new Date(date);
    result.setDate(result.getDate() + days);

    return result.toISOString().slice(0, 10);
  };
  const deadline = (date) => {
    return new Date(date).toISOString().split("T")[0];
  };

  const [pinnedTasks, setPinnedTasks] = useState([]);
  const [unpinnedTasks, setUnpinnedTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    let { tasks } = user;
    let { filter, list, tag } = query;
    let filteredTasks = [];

    if (filter) {
      let taskDate = "";

      switch (filter) {
        case "today":
          tasks.forEach((task) => {
            taskDate = deadline(task.deadline);
            if (taskDate === date) {
              filteredTasks.push(task);
            }
          });
          break;
        case "tomorrow":
          tasks.forEach((task) => {
            taskDate = deadline(task.deadline);
            if (addDays(taskDate, 1) === date) {
              filteredTasks.push(task);
            }
          });
          break;
        case "week":
          tasks.forEach((task) => {
            taskDate = deadline(task.deadline);
            if (date < addDays(taskDate, 7)) {
              filteredTasks.push(task);
            }
          });
          break;
        case "unlisted":
          tasks.forEach((task) => {
            if (!task.list) {
              filteredTasks.push(task);
            }
          });
          break;
        case "completed":
          tasks.forEach((task) => {
            if (task.completed) {
              filteredTasks.push(task);
            }
          });
          break;
        case "trash":
          tasks.forEach((task) => {
            if (task.list === "trash") {
              filteredTasks.push(task);
            }
          });
          break;

        default:
          break;
      }
    } else if (list) {
      tasks.forEach((task) => {
        if (task.list === Number(list)) {
          filteredTasks.push(task);
        }
      });
    } else if (tag) {
      tasks.forEach((task) => {
        let { tags } = task;
        if (tags.length > 0) {
          tags.map((el) => {
            if (el === Number(tag)) {
              filteredTasks.push(task);
            }
          });
        }
      });
    }

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
  }, [user, date, query]);

  return (
    <section className={styles.container}>
      <CentralHeader />
      <TaskAggregator />
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
    </section>
  );
};

export default CentralView;
