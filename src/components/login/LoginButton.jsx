import s from "../../styles/Login.module.scss";

const LoginButton = ({ disabled, children }) => {
  return (
    <button className={s.actionButton} disabled={disabled}>
      {children}
    </button>
  );
};

export default LoginButton;
