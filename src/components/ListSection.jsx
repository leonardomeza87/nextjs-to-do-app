import { useContext, useState } from "react";

import styles from "../styles/ListSection.module.scss";

import List from "./List";

import ChevronIcon from "../../public/assets/chevron-down.svg";
import AddIcon from "../../public/assets/add.svg";
import MenuIcon from "../../public/assets/menu.svg";
import TagIcon from "../../public/assets/pricetag-outline.svg";

import { UserContext } from "../contexts/UserContext";

const ListSection = () => {
  const { lists, tags } = useContext(UserContext);

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
  };
  const handleAddTag = (e) => {
    e.stopPropagation();
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
            {lists.map((list) => {
              return (
                <List
                  key={list.name}
                  title={list.name}
                  url={"list=" + list.id}
                  svg={<MenuIcon />}
                  quantity={list.tasks.length}
                />
              );
            })}
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
            {tags.map((tag) => {
              return (
                <List
                  key={tag.name}
                  title={tag.name}
                  url={"tag=" + tag.id}
                  svg={<TagIcon />}
                  quantity={tag.tasks.length}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ListSection;
