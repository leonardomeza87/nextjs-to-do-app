import styles from "../../styles/LeftView.module.scss";

import Sidebar from "../Sidebar";
import LateralMenu from "../LateralMenu";

const LeftView = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <LateralMenu />
    </div>
  );
};

export default LeftView;
