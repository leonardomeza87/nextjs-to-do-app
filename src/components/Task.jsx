import styles from "../styles/Task.module.scss";
import Tag from "./Tag";
// import PinSVG from "../../public/assets/pin-outline.svg";

const Task = ({ task }) => {
  return (
    <div className={styles.container}>
      <input type="checkbox" name="" id="" />
      <p>{task.title}</p>
      <div className={styles.tagContainer}>
        <Tag />
      </div>
      <span>Today</span>
    </div>
  );
};

export default Task;
