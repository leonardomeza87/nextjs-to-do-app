import styles from "../../styles/Login.module.scss";

const LoginButton = ({ disabled, click, children }) => {
  return (
    <button className={styles.actionButton} disabled={disabled} onClick={click}>
      {children}
    </button>
  );
};

export default LoginButton;
