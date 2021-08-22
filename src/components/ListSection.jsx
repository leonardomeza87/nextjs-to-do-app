import styles from "../styles/ListSection.module.scss";
import Filter from "./Filter";
import MenuSVG from "../../public/assets/menu.svg";

const ListSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.lists}>
        <Filter title={"List"} svg={<MenuSVG />} />
        <Filter title={"List"} svg={<MenuSVG />} />
        <Filter title={"List"} svg={<MenuSVG />} />
        <Filter title={"List"} svg={<MenuSVG />} />
        <Filter title={"List"} svg={<MenuSVG />} />
        <Filter title={"List"} svg={<MenuSVG />} />
        <Filter title={"List"} svg={<MenuSVG />} />
        <Filter title={"List"} svg={<MenuSVG />} />
        <Filter title={"List"} svg={<MenuSVG />} />
        <Filter title={"List"} svg={<MenuSVG />} />
      </div>
    </div>
  );
};

export default ListSection;
