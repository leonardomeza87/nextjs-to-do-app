import styles from "../../styles/RightView.module.scss";

import ListIcon from "../../../public/assets/albums-outline.svg";
import FontIcon from "../../../public/assets/text.svg";
import EllipsisIcon from "../../../public/assets/ellipsis-horizontal.svg";
import FlagIcon from "../../../public/assets/flag.svg";
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
          <button>
            <FlagIcon />
          </button>
        </div>
      </header>
      <TaskDescription />
      <footer className={styles.footer}>
        <button>
          <div className={styles.iconContainer}>
            <ListIcon />
          </div>
          <p>Inbox</p>
        </button>
        <div className={styles.options}>
          <button>
            <div className={styles.iconContainer}>
              <EllipsisIcon />
            </div>
          </button>
        </div>
      </footer>
    </section>
  );
};

export default RightView;
