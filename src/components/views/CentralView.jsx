import styles from "../../styles/CentralView.module.scss";

import TaskAggregator from "../TaskAggregator";
import CentralHeader from "../CentralHeader";

import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

import { UserContext } from "../../contexts/UserContext";
import { TimeContext } from "../../contexts/TimeContext";
import TaskGrouperContainer from "../TaskGrouperContainer";

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

  const [filteredTasks, setFilteredTasks] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    let { tasks } = user;
    let { filter, list, tag } = query;
    let temporalTaskList = [];

    if (filter) {
      let taskDate = "";

      switch (filter) {
        case "today":
          tasks.forEach((task) => {
            taskDate = deadline(task.deadline);
            if (taskDate === date) {
              temporalTaskList.push(task);
            }
          });
          setTitle("Today");
          break;
        case "tomorrow":
          tasks.forEach((task) => {
            taskDate = deadline(task.deadline);
            if (addDays(date, 1) === taskDate) {
              temporalTaskList.push(task);
            }
          });
          setTitle("Tomorrow");
          break;
        case "week":
          tasks.forEach((task) => {
            taskDate = deadline(task.deadline);
            if (taskDate > addDays(date, 1) && date < addDays(taskDate, 7)) {
              temporalTaskList.push(task);
            }
          });
          setTitle("Week");
          break;
        case "unlisted":
          tasks.forEach((task) => {
            if (!task.list) {
              temporalTaskList.push(task);
            }
          });
          setTitle("Inbox");
          break;
        case "completed":
          tasks.forEach((task) => {
            if (task.completed) {
              temporalTaskList.push(task);
            }
          });
          setTitle("Completed");
          break;
        case "trash":
          tasks.forEach((task) => {
            if (task.list === "trash") {
              temporalTaskList.push(task);
            }
          });
          setTitle("Trash");
          break;

        default:
          break;
      }
    } else if (list) {
      tasks.forEach((task) => {
        if (task.list === Number(list)) {
          temporalTaskList.push(task);
        }
      });
      setTitle(user.lists.find((el) => el.id === Number(list)).name);
    } else if (tag) {
      tasks.forEach((task) => {
        let { tags } = task;
        if (tags.length > 0) {
          tags.map((el) => {
            if (el === Number(tag)) {
              temporalTaskList.push(task);
            }
          });
        }
      });
      setTitle(user.tags.find((el) => el.id === Number(tag)).label);
    }

    setFilteredTasks(temporalTaskList);
  }, [user, date, query]);

  return (
    <section className={styles.container}>
      <CentralHeader title={title} />
      {query.filter != "completed" && query.filter != "trash" && (
        <TaskAggregator />
      )}
      <TaskGrouperContainer filteredTasks={filteredTasks} />
    </section>
  );
};

export default CentralView;
