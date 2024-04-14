import { useState } from "react";
import { navItems } from "../constants";
import { Menu, X, MoonStar, Sun } from "lucide-react";
import useTheme from "../context/themeContext";

function Navbar() {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  const [menuOpen, setMenuOpen] = useState(false);
  // toggle theme true = darkmode
  const [toggleTheme, setToggleTheme] = useState(true);

  const handleToggleTheme = () => {
    setToggleTheme(!toggleTheme);
    if (toggleTheme) {
      darkTheme();
    } else {
      lightTheme();
    }
    console.log("theme: ", toggleTheme);
  };

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="sticky top-0 py-3  border-b  backdrop-blur-lg  border-neutral-700/80">
      <div className="mx-auto relative text-sm px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center flex-shrink-0">
            <img
              className="h-10 w-10 mr-2"
              src="src\assets\logo.png"
              alt="logo"
            />
            <span className="text-xl  tracking-tight ">VirtualR</span>
          </div>
          <ul className="hidden lg:flex space-x-4">
            {navItems.map((item, index) => (
              <li className="cursor-pointer" key={index}>
                {item.label}
              </li>
            ))}
          </ul>
          <div className="px-2 py-2 space-x-4 hidden lg:flex">
            <a
              href="#"
              className="border rounded-md dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white px-2 py-2"
            >
              Sign in
            </a>
            <a
              href="#"
              className="border rounded-md px-2 py-2 bg-gradient-to-r from-orange-500 to-orange-200 dark:bg-gradient-to-r dark:from-orange-500 dark:to-orange-800"
            >
              Create an account
            </a>
            <button onClick={handleToggleTheme}>
              {toggleTheme === true ? <MoonStar /> : <Sun color="white" />}
            </button>
          </div>
          <div className="lg:hidden md:flex justify-end space-x-4 ">
            <button onClick={handleToggleTheme}>
              {toggleTheme === true ? <MoonStar /> : <Sun color="white" />}
            </button>
            <button onClick={handleToggleMenu}>
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="lg:hidden  fixed flex-col right-0 flex items-center justify-center z-20 w-full bg-gradient-to-r from-orange-500 to-orange-200  dark:bg-gradient-to-r dark:from-orange-500 dark:to-orange-800 dark:bg-neutral-900 p-10">
            <ul className="space-y-3">
              {navItems.map((item, index) => (
                <li key={index}>{item.label}</li>
              ))}
            </ul>
            <div className="px-2 py-8 space-x-4 ">
              <a
                href="#"
                className="border border-black bg-white dark:bg-zinc-900 dark:border-white rounded-md px-2 py-2"
              >
                Sign in
              </a>
              <a
                href="#"
                className="border rounded-md px-2 py-2 bg-gradient-to-r from-orange-500 to-orange-200  dark:bg-gradient-to-r dark:from-orange-500 dark:to-orange-800"
              >
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
export default Navbar;
