import { useEffect, useState } from "react";

function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="border px-3 py-1 rounded"
    >
      {dark ? "☀️" : "🌙"}
    </button>
  );
}

export default ThemeToggle;
