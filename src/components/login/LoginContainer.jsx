import Link from "next/link";
import LogoSVG from "../../../public/assets/checkmark.svg";
import styles from "../../styles/Login.module.scss";

const LoginContainer = ({ title, children, swap, link }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <LogoSVG />
        </div>
        <h1>{title}</h1>
        <form>{children}</form>
        <div className={styles.swap}>
          <span>{swap}</span>
          <Link href={`/${link}`}>
            <a>{link === "login" ? "Log In" : "Sign Up"}</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginContainer;
