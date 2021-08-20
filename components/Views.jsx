import Link from "next/link";
import styles from "../styles/Views.module.scss";

const Views = () => {
  return (
    <div className={styles.container}>
      <main>
        <h1>Tasks</h1>
        <input type="text" placeholder="Add a task" />
      </main>
      <section>
        <Link href="/">
          <a>Back</a>
        </Link>
        <Link href="/app/settings">
          <a>Settings</a>
        </Link>
      </section>
    </div>
  );
};

export default Views;
