import Link from "next/link";

const Signup = () => {
  return (
    <div>
      <h1>Sign up</h1>
      <form>
        <input type="email" />
        <input type="password" />
        <input type="submit" value="Sign up" />
      </form>
      <Link href="/">
        <a>Back</a>
      </Link>
    </div>
  );
};

export default Signup;
