import styles from "../../styles/RightView.module.scss";

import { useState } from "react";

import ListIcon from "../../../public/assets/albums-outline.svg";
import EllipsisIcon from "../../../public/assets/ellipsis-horizontal.svg";
import FlagIcon from "../../../public/assets/flag.svg";
import TaskDescription from "../TaskDescription";

const RightView = () => {
  const [date, setDate] = useState("");

  const handleChange = (e) => {
    setDate(e.target.value);
    // Date.parse(
  };

  return (
    <section className={styles.container}>
      <header>
        <div className={styles.checkbox}>
          <input type="checkbox" name="" id="" />
        </div>
        <div className={styles.dateContainer}>
          <input
            type="date"
            name=""
            id=""
            value={date}
            onChange={handleChange}
          />
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
