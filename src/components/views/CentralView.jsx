import styles from "../../styles/CentralView.module.scss";
import ChevronIcon from "../../../public/assets/chevron-back.svg";
import FilterSVG from "../../../public/assets/filter.svg";
import EllipsisSVG from "../../../public/assets/ellipsis-horizontal.svg";
import TaskGrouper from "../TaskGrouper";

const CentralView = () => {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <button>
          <ChevronIcon />
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
          <TaskGrouper open={false} />
          <TaskGrouper open={true} />
          <TaskGrouper open={false} />
        </div>
      </div>
    </section>
  );
};

export default CentralView;
