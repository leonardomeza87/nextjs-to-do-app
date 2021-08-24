import styles from "../../styles/RightView.module.scss";
import TaskDescription from "../TaskDescription";

const RightView = () => {
  return (
    <section className={styles.container}>
      <header>
        <div className={styles.checkbox}>
          <input type="checkbox" name="" id="" />
        </div>
        <div className={styles.dateContainer}>
          <input type="date" name="" id="" />
        </div>
        <div className={styles.btn}>
          <button>IM</button>
        </div>
      </header>
      <TaskDescription />
      <footer className={styles.footer}>
        <button>Section</button>
        <div className={styles.options}>
          <button>A</button>
          <button>Options</button>
        </div>
      </footer>
    </section>
  );
};

export default RightView;
