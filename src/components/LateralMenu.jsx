import styles from "../styles/LateralMenu.module.scss";
import MenuSVG from "../../public/assets/menu.svg";
import CalendarSVG from "../../public/assets/calendar.svg";
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
          <p>Buy the premium!</p>
        </div>
      </div>
    </div>
  );
};

export default LateralMenu;
