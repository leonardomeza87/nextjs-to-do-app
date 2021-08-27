import styles from "../styles/CentralHeader.module.scss";

import ChevronIcon from "../../public/assets/chevron-back.svg";
import FilterIcon from "../../public/assets/filter.svg";
import EllipsisIcon from "../../public/assets/ellipsis-horizontal.svg";

const CentralHeader = () => {
  return (
    <header className={styles.container}>
      <button>
        <ChevronIcon />
      </button>
      <h1>Today</h1>
      <div className={styles.icons}>
        <button>
          <FilterIcon />
        </button>
        <button>
          <EllipsisIcon />
        </button>
      </div>
    </header>
  );
};

export default CentralHeader;
