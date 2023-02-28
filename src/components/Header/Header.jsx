import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import MenuItem from "./MenuItem";
import DarkModeSwitch from "./DarkModeSwitch";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between mx-2 sm:py-6 max-w-6xl sm:mx-auto">
      <nav>
        <ul className="flex items-center">
          <MenuItem title={"HOME"} path={"/"} Icon={AiFillHome} />
          <MenuItem
            title={"ABOUT"}
            path={"/about"}
            Icon={BsFillInfoCircleFill}
          />
        </ul>
      </nav>
      <div className="flex items-center space-x-5">
        <DarkModeSwitch />
        <Link href={"/"}>
          <h2>
            <span className="text-2xl font-bold bg-amber-400 dark:text-white py-1 px-2 rounded-lg mr-2">
              IMDb
            </span>
            <span className="text-xl hidden sm:inline">Clone</span>
          </h2>
        </Link>
      </div>
    </header>
  );
};

export default Header;
