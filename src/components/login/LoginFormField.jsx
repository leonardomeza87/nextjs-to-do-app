import s from "../../styles/Login.module.scss";
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
    <div className={s.formField}>
      <label htmlFor={type} className={value || focus ? s.active : undefined}>
        {type === "email" ? "Email Adress" : "Password"}
      </label>
      <div className={s.inputWrapper}>
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
            focus ? s.borderFocus : error ? s.borderFocusError : undefined
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
