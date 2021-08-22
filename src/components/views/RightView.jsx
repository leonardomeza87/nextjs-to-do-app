import Link from "next/link";

const RightView = () => {
  return (
    <section>
      <Link href="/">
        <a>Back</a>
      </Link>
      <Link href="/app/settings">
        <a>Settings</a>
      </Link>
    </section>
  );
};

export default RightView;
