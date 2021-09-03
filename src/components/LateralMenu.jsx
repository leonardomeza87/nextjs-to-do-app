import styles from "../styles/LateralMenu.module.scss";

import PinArea from "./PinArea";
import FilterSection from "./FilterSection";
import ListSection from "./ListSection";
import UpgradeButton from "./UpgradeButton";

import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";

const LateralMenu = () => {
  const user = useContext(UserContext);
  const { tasks, lists } = user;

  return (
    <div className={styles.container}>
      <PinArea />
      <div className={styles.mainContainer}>
        <div className={styles.main}>
          <FilterSection tasks={tasks} section="main" />
          <ListSection lists={lists} />
          <FilterSection tasks={tasks} />
        </div>
        <UpgradeButton />
      </div>
    </div>
  );
};

export default LateralMenu;
