import styles from "../../styles/Login.module.scss";
import EyeSVG from "../../../public/assets/eye.svg";
import EyeOffSVG from "../../../public/assets/eye-off.svg";

const LoginFormField = ({
  type,
  autoComplete,
  value,
  focus,
  error,
  handleFocus,
  handleChange,
  handleBlur,
  showPassword,
  handleShowPassword,
}) => {
  return (
    <div className={styles.formField}>
      <label
        htmlFor={type}
        className={value || focus ? styles.active : undefined}
      >
        {type === "email" ? "Email Adress" : "Password"}
      </label>
      <div className={styles.inputWrapper}>
        <input
          id={type}
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          name={type}
          autoComplete={autoComplete}
          autoCapitalize="none"
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          value={value}
        />
        <fieldset
          className={
            focus
              ? styles.borderFocus
              : error
              ? styles.borderFocusError
              : undefined
          }
        />
        {type === "password" && (
          <button onClick={handleShowPassword}>
            {showPassword ? <EyeSVG /> : <EyeOffSVG />}
          </button>
        )}
      </div>
      <p>
        {" "}
        <span>{error}</span>{" "}
      </p>
    </div>
  );
};

export default LoginFormField;
