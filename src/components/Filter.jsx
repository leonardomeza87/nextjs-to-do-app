import styles from "../styles/Filter.module.scss";

import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { TimeContext } from "../contexts/TimeContext";

const Filter = ({ title, svg, filter }) => {
  const { tasks } = useContext(UserContext);
  // const time = useContext(TimeContext);
  const time = "2021-08-23";

  let numberOfTasks = 0;

  switch (filter) {
    case "today":
      tasks.forEach((el) => {
        if (el.date) {
          const date = new Date(el.date).toISOString().split("T")[0];
          if (date === time) {
            numberOfTasks++;
          }
        }
      });
      break;
    case "tomorrow":
      tasks.forEach((el) => {
        if (el.date) {
          const date = new Date(el.date).toISOString().split("T")[0];
          let taskDay = new Date(date).getUTCDate();
          let timeDay = new Date(time).getUTCDate() + 1;
          if (taskDay === timeDay) {
            numberOfTasks++;
          }
        }
      });
      break;
    case "week":
      tasks.forEach((el) => {
        if (el.date) {
          const date = new Date(el.date).toISOString().split("T")[0];
          let taskDay = new Date(date).getUTCDate();
          let timeDay = new Date(time).getUTCDate() + 1;
          if (taskDay > timeDay && taskDay < timeDay + 7) {
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
