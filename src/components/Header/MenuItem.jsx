import Link from "next/link";

const MenuItem = ({ title, path, Icon }) => {
  return (
    <li>
      <Link href={path} className="mx-4 lg:mx-6 hover:text-amber-400">
        <Icon className="text-2xl sm:hidden mx-4" />
        <p className="hidden sm:inline my-2 text-sm">{title}</p>
      </Link>
    </li>
  );
};

export default MenuItem;
