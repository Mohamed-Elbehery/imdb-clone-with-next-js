import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <ul className="flex items-center sm:justify-center sm:px-0 justify-evenly px-6 space-x-12 dark:bg-slate-700 bg-amber-100 py-5">
      <NavItem title={"Trending"} param={"fetchTrending"} />
      <NavItem title={"Top Rated"} param={"fetchTopRated"} />
    </ul>
  );
};

export default Navbar;
