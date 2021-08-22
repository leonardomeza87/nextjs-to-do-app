import Link from "next/link";
import styles from "../../styles/Views.module.scss";
import LeftView from "./LeftView";
import CentralView from "./CentralView";
import RightView from "./RightView";

const Views = () => {
  return (
    <div className={styles.container}>
      <LeftView />
      <CentralView />
      <RightView />
    </div>
  );
};

export default Views;
