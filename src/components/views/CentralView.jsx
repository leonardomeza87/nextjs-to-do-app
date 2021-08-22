import styles from "../../styles/CentralView.module.scss";
import MenuSVG from "../../../public/assets/menu.svg";
import FilterSVG from "../../../public/assets/filter.svg";
import EllipsisSVG from "../../../public/assets/ellipsis-horizontal.svg";
import TaskGrouper from "../TaskGrouper";

const CentralView = () => {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <button>
          <MenuSVG />
        </button>
        <h1>Today</h1>
        <div className={styles.icons}>
          <button>
            <FilterSVG />
          </button>
          <button>
            <EllipsisSVG />
          </button>
        </div>
      </header>
      <div className={styles.input}>
        <input type="text" placeholder="Add a task" />
      </div>
      <div className={styles.tasksContainer}>
        <div className={styles.tasksContainer2}>
          <TaskGrouper />
          <TaskGrouper />
          <TaskGrouper />
        </div>
      </div>
    </section>
  );
};

export default CentralView;
