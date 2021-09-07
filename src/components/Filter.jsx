import styles from "../styles/Filter.module.scss";

import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { TimeContext } from "../contexts/TimeContext";

const Filter = ({ title, svg, filter }) => {
  const data = useContext(UserContext);
  const { tasks } = data;
  const { date } = useContext(TimeContext);

  //helpers
  const addDays = (date, days) => {
    var result = new Date(date);
    result.setDate(result.getDate() + days);

    return result.toISOString().slice(0, 10);
  };
  const deadline = (date) => {
    return new Date(date).toISOString().split("T")[0];
  };

  let numberOfTasks = 0;
  let taskDate = "";

  switch (filter) {
    case "today":
      tasks.forEach((task) => {
        if (task.deadline) {
          taskDate = deadline(task.deadline);
          // console.log(date);
          if (taskDate === date) {
            numberOfTasks++;
          }
        }
      });
      break;
    case "tomorrow":
      tasks.forEach((task) => {
        if (task.deadline) {
          taskDate = deadline(task.deadline);
          if (taskDate === addDays(date, 1)) {
            numberOfTasks++;
          }
        }
      });
      break;
    case "week":
      tasks.forEach((task) => {
        if (task.deadline) {
          taskDate = deadline(task.deadline);
          if (taskDate > addDays(date, 1) && date < addDays(taskDate, 7)) {
            numberOfTasks++;
          }
        }
      });
      break;
    case "unlisted":
      tasks.forEach((el) => {
        if (!el.list) {
          numberOfTasks++;
        }
      });
      break;
    case "completed":
      tasks.forEach((el) => {
        if (el.completed) {
          numberOfTasks++;
        }
      });
      break;
    case "trash":
      tasks.forEach((el) => {
        if (el.list && el.list === "trash") {
          numberOfTasks++;
        }
      });
      break;

    default:
      break;
  }

  return (
    <div className={styles.filter}>
      <Link href={`/app?filter=${filter}`}>
        <a>
          <div>{svg}</div>
          <p>{title}</p>
          <span>{numberOfTasks}</span>
        </a>
      </Link>
    </div>
  );
};

export default Filter;
