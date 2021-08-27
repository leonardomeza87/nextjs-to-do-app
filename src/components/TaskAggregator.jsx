import styles from "../styles/TaskAggregator.module.scss";

const TaskAggregator = () => {
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Add a task" />
    </div>
  );
};

export default TaskAggregator;
