import Link from "next/link";
import login from "../../styles/Login.module.css";

const Login = () => {
  return (
    <div className={login.container}>
      <h1>Login</h1>
      <form>
        <input type="email" />
        <input type="password" />
        <input type="submit" value="Login" />
      </form>
      <Link href="/">
        <a>Back</a>
      </Link>
    </div>
  );
};

export default Login;
