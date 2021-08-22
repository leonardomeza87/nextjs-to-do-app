import Link from "next/link";
import LogoSVG from "../../../public/assets/checkmark.svg";
import s from "../../styles/Login.module.scss";

const LoginContainer = ({ title, children, swap, link }) => {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <div className={s.logo}>
          <LogoSVG />
        </div>
        <h1>{title}</h1>
        <form>{children}</form>
        <div className={s.swap}>
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
