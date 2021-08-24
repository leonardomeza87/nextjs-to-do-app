import Link from "next/link";
import login from "../../styles/Login.module.scss";
import { useEffect, useState } from "react";
import LoginButton from "../../components/login/LoginButton";
import { isEmail } from "../../helpers/utilities";
import LoginContainer from "../../components/login/LoginContainer";
import LoginFormField from "../../components/login/LoginFormField";
import Head from "next/head";

const initialFocus = {
  email: false,
  password: false,
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [focus, setFocus] = useState(initialFocus);
  const [error, setError] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleError = (input, msg) => {
    setError({ ...error, [input]: msg });
  };

  const handleFocus = (e) => {
    let { name } = e.target;

    setFocus({ ...focus, [name]: true });
    handleError(name, null);
  };

  const handleBlur = (e) => {
    let { name, value } = e.target;

    setFocus({ ...focus, [name]: false });

    if (value === "") {
      handleError(name, "Required");
    } else if (name === "email" && !isEmail(value)) {
      handleError(name, "Invalid Format");
    } else {
      handleError(name, null);
    }
  };

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }

    if (value) {
      handleError(name, null);
    }
  };

  //Update state in autocomplete
  useEffect(() => {
    setEmail(document.getElementById("email").value);
    setPassword(document.getElementById("password").value);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in");

    const connect = async () => {
      const res = await fetch("https://tdap-db.herokuapp.com/auth/" + email);
      const data = await res.json();

      if (data.password) {
        console.log(data);
        if (password === data.password) {
          console.log("Successful login");
        } else {
          console.log("The password entered is not correct");
        }
      } else {
        console.log("The email entered is not registered");
      }
    };

    connect();
  };

  return (
    <>
      <Head>
        <title>LOG IN</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LoginContainer
        title="Log in"
        swap="Don’t have an XNOR account?"
        link="signup"
      >
        <LoginFormField
          type="email"
          autoComplete="username"
          value={email}
          focus={focus.email}
          error={error.email}
          handleFocus={handleFocus}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
        <LoginFormField
          type="password"
          autoComplete="current-password"
          value={password}
          focus={focus.password}
          error={error.password}
          handleFocus={handleFocus}
          handleChange={handleChange}
          handleBlur={handleBlur}
          showPassword={showPassword}
          handleShowPassword={handleShowPassword}
        />
        <div className={login.options}>
          <label htmlFor="rememberMe" className={login.rememberMe}>
            <span>
              <input type="checkbox" name="rememberMe" id="rememberMe" />
            </span>
            <p>Remember me</p>
          </label>
          <Link href="/recovery">
            <a>Forgot Your Password</a>
          </Link>
        </div>
        <LoginButton disabled={!email || !password} click={handleSubmit}>
          Log in now
        </LoginButton>
      </LoginContainer>
    </>
  );
};

export default Login;
