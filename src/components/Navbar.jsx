import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
    <nav className="fixed w-full bg-white/70 dark:bg-black/50 backdrop-blur z-50">
      <div className="max-w-6xl mx-auto flex justify-between p-4 items-center">
        <h1 className="font-bold text-xl">Ravat Prince</h1>

        <div className="flex gap-6 items-center">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
