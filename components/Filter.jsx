import styles from "../styles/Filter.module.scss";
import MenuSVG from "/public/assets/menu.svg";

import Link from "next/link";

const Filter = ({ title, url, svg }) => {
  let quantity = 12;

  return (
    <div className={styles.filter}>
      <Link href={`/app?=${url}`}>
        <a>
          <div>{svg}</div>
          <p>{title}</p>
          <span>{quantity}</span>
        </a>
      </Link>
    </div>
  );
};

export default Filter;
