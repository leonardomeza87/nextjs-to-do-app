import { useState } from "react";
import styles from "../styles/ListSection.module.scss";
import List from "./List";
import ChevronIcon from "../../public/assets/chevron-down.svg";
import AddIcon from "../../public/assets/add.svg";
import MenuIcon from "../../public/assets/menu.svg";

const ListSection = () => {
  const [showLists, setShowLists] = useState(true);
  const [showTags, setShowTags] = useState(false);

  const handlShowLists = () => {
    setShowLists(!showLists);
  };
  const handlShowTags = () => {
    setShowTags(!showTags);
  };

  const handleAddList = (e) => {
    e.stopPropagation();
    console.log("add list");
  };
  const handleAddTag = (e) => {
    e.stopPropagation();
    console.log("add tag");
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <button onClick={handlShowLists} className={styles.btn}>
          <div
            className={
              showLists
                ? styles.iconContainer
                : styles.iconContainer + " " + styles.rotated
            }
          >
            <ChevronIcon />
          </div>
          <p>Lists</p>
          <div className={styles.addBtn} onClick={handleAddList}>
            <AddIcon />
          </div>
        </button>
        {showLists && (
          <div className={styles.listsContainer}>
            <List title="Work" svg={<MenuIcon />} />
            <List title="Work" svg={<MenuIcon />} />
            <List title="Work" svg={<MenuIcon />} />
            <List title="Work" svg={<MenuIcon />} />
            <List title="Work" svg={<MenuIcon />} />
          </div>
        )}
        <button onClick={handlShowTags} className={styles.btn}>
          <div
            className={
              showTags
                ? styles.iconContainer
                : styles.iconContainer + " " + styles.rotated
            }
          >
            <ChevronIcon />
          </div>
          <p>Tags</p>
          <div className={styles.addBtn} onClick={handleAddTag}>
            <AddIcon />
          </div>
        </button>
        {showTags && (
          <div className={styles.listsContainer}>
            <List title="gg" svg={<MenuIcon />} />
            <List title="gg" svg={<MenuIcon />} />
            <List title="gg" svg={<MenuIcon />} />
            <List title="gg" svg={<MenuIcon />} />
            <List title="gg" svg={<MenuIcon />} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ListSection;
