import Link from "next/link";

const Settings = () => {
  return (
    <div>
      <h1>Settings</h1>
      <button>Option 1</button>
      <button>Option 2</button>
      <button>Option 3</button>
      <Link href="/app">
        <a>Back</a>
      </Link>
    </div>
  );
};

export default Settings;
