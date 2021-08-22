import styles from "../styles/Task.module.scss";
// import PinSVG from "../../public/assets/pin-outline.svg";

const Task = () => {
  return (
    <div className={styles.container}>
      <input type="checkbox" name="" id="" />
      <p>This is an example</p>
      <span>Today</span>
    </div>
  );
};

export default Task;
