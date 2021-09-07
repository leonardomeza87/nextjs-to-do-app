import styles from "../styles/Task.module.scss";

import Tag from "./Tag";
// import PinSVG from "../../public/assets/pin-outline.svg";

import { TimeContext } from "../contexts/TimeContext";
import { UserContext } from "../contexts/UserContext";

import { useContext, useEffect, useState } from "react";

const Task = ({ task, completed }) => {
  const { date } = useContext(TimeContext);
  const user = useContext(UserContext);
  const { tags, deadline } = task;

  const [checked, setChecked] = useState(completed);

  //helpers
  const addDays = (date, days) => {
    var result = new Date(date);
    result.setDate(result.getDate() + days);

    return result.toISOString().slice(0, 10);
  };

  const handleChange = (e) => {
    setChecked(!checked);
    // updateTasks();
  };

  // const updateTasks = () => {
  //   let tasksCopy = user.tasks;

  //   tasksCopy.forEach((el) => {
  //     if (el.id === task.id) {
  //       el.completed = checked;
  //       console.log(el);
  //     }
  //   });

  //   user.setContext({ ...user, tasks: tasksCopy });
  // };

  useEffect(() => {
    let tasksCopy = user.tasks;

    tasksCopy.forEach((el) => {
      if (el.id === task.id) {
        el.completed = checked;
        console.log(el);
      }
    });

    user.setContext({ ...user, tasks: tasksCopy });
  }, [checked]);

  return (
    <div
      className={
        completed ? styles.container + " " + styles.completed : styles.container
      }
    >
      <input type="checkbox" id="" checked={checked} onChange={handleChange} />
      <p>{task.title}</p>
      <div className={styles.tagContainer}>
        {tags.length > 0 &&
          tags[0] !== null &&
          tags.map((tag) => {
            return <Tag key={tag} tag={tag} />;
          })}
      </div>
      <span>
        {deadline && deadline === date
          ? "Today"
          : deadline === addDays(date, 1)
          ? "Tomorrow"
          : ""}
      </span>
    </div>
  );
};

export default Task;
