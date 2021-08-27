import styles from "../styles/LateralMenu.module.scss";

import PinArea from "./PinArea";
import FilterSection from "./FilterSection";
import ListSection from "./ListSection";
import UpgradeButton from "./UpgradeButton";

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
        <UpgradeButton />
      </div>
    </div>
  );
};

export default LateralMenu;
