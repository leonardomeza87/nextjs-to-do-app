import Link from "next/link";

const App = () => {
  return (
    <div>
      <aside>Bar</aside>
      <main>
        <h1>Main</h1>
        <div>Lateral</div>
        <div>Taks</div>
        <div>Descriptions</div>
      </main>
      <Link href="/">
        <a>Back</a>
      </Link>
      <Link href="/app/settings">
        <a>Settings</a>
      </Link>
    </div>
  );
};

export default App;
