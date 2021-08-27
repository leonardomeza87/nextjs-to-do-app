import styles from "../styles/List.module.scss";

import Link from "next/link";
import { useState } from "react";
import EllipsisIcon from "../../public/assets/ellipsis-horizontal.svg";

const List = ({ title, url, svg, quantity }) => {
  const handleClick = (e) => {
    e.preventDefault();
  };

  // handleHover

  return (
    <div className={styles.list}>
      <Link href={`/app?${url}`}>
        <a>
          <div className={styles.iconContainer}>{svg}</div>
          <p>{title}</p>
          <span>{quantity}</span>
          <div className={styles.option} onClick={handleClick}>
            <EllipsisIcon />
          </div>
        </a>
      </Link>
    </div>
  );
};

export default List;
