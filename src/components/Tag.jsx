import styles from "../styles/Tag.module.scss";

import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";

const Tag = ({ tag }) => {
  const user = useContext(UserContext);
  const { tags } = user;
  const theTag = tags.find((el) => el.id === tag);
  // console.log(theTag);
  return <div className={styles.container}>{<p>{theTag.label}</p>}</div>;
};

export default Tag;
