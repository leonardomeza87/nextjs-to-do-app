import styles from "../../styles/Views.module.scss";

import LeftView from "./LeftView";
import CentralView from "./CentralView";
// import RightView from "./RightView";

import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { UserContext } from "../../contexts/UserContext";
import { TimeContext } from "../../contexts/TimeContext";

const Views = () => {
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

  const [tasksList, setTasksList] = useState([]);

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
          tags.forEach((el) => {
            if (el === Number(tag)) {
              filteredTasks.push(task);
            }
          });
        }
      });
    }

    setTasksList(filteredTasks);
  }, [user, date, query]);

  return (
    <div className={styles.container}>
      <LeftView />
      <CentralView tasksList={tasksList} />
      {/* <RightView /> */}
    </div>
  );
};

export default Views;
