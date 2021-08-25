import styles from "../styles/LateralMenu.module.scss";
import ChevronIcon from "../../public/assets/chevron-forward.svg";
import RocketIcon from "../../public/assets/rocket.svg";
import Filter from "./Filter";
import FilterSection from "./FilterSection";
import ListSection from "./ListSection";
import PinArea from "./PinArea";

const LateralMenu = () => {
  return (
    <div className={styles.container}>
      <PinArea />
      <div className={styles.mainContainer}>
        <div className={styles.main}>
          <FilterSection section="main" />
          <ListSection />
          <FilterSection />
        </div>
        <div className={styles.spam}>
          <div className={styles.iconContainer}>
            <RocketIcon />
          </div>
          <p>Buy the premium!</p>
          <div className={styles.iconContainer}>
            <ChevronIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LateralMenu;
