import styles from "../../styles/CentralView.module.scss";

import TaskGrouper from "../TaskGrouper";

import { useRouter } from "next/router";

import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { TimeContext } from "../../contexts/TimeContext";
import TaskAggregator from "../TaskAggregator";
import CentralHeader from "../CentralHeader";

const CentralView = () => {
  const { tasks } = useContext(UserContext);
  // const time = useContext(TimeContext);
  const time = "2021-08-23";
  // console.log(tasks);
  // console.log(time);

  const { query } = useRouter();

  let { filter, list, tag, task } = query;
  let filteredTasks = [];

  if (filter) {
    switch (filter) {
      case "today":
        tasks.forEach((task) => {
          let date = new Date(task.date).toISOString().split("T")[0];
          console.log(date);
          if (date === time) {
            filteredTasks.push(task);
          }
        });
        break;
      case "tomorrow":
        tasks.forEach((task) => {
          let date = new Date(task.date).toISOString().split("T")[0];
          console.log(date);
          let taskDay = new Date(date).getUTCDate();
          let timeDay = new Date(time).getUTCDate() + 1;
          if (taskDay === timeDay) {
            filteredTasks.push(task);
          }
        });
        break;
      case "week":
        tasks.forEach((task) => {
          let date = new Date(task.date).toISOString().split("T")[0];
          console.log(date);
          let taskDay = new Date(date).getUTCDate();
          let timeDay = new Date(time).getUTCDate() + 1;
          if (taskDay > timeDay && taskDay < timeDay + 7) {
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

    // filteredTasks = tasks.map((task) => {});
  } else if (list) {
    console.log(list);
    tasks.forEach((task) => {
      if (task.list === Number(list)) {
        filteredTasks.push(task);
      }
    });
  } else if (tag) {
    // console.log(tag);
    tasks.forEach((task) => {
      task.tags.forEach((el) => {
        console.log(el);
        if (el === Number(tag)) {
          filteredTasks.push(task);
        }
      });
    });
  }
  // let pinnedTasks = tasks.map((task) => task.pinned);

  // console.log(filteredTasks);
  let pinnedTasks = [];

  filteredTasks.map((task) => {
    if (task.pinned) {
      pinnedTasks.push(task);
    }
  });

  let unpinnedTasks = [];

  filteredTasks.map((task) => {
    if (!task.pinned) {
      unpinnedTasks.push(task);
    }
  });

  // console.log(pinnedTasks);
  // console.log(unpinnedTasks);

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
        </div>
      </div>
    </section>
  );
};

export default CentralView;
