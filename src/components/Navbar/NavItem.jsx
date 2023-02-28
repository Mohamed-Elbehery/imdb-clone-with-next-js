"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const NavItem = ({ title, param }) => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <li className={`cursor-pointer hover:text-amber-400 font-semibold px-2`}>
      <Link
        className={`${
          genre &&
          genre === param &&
          "underline underline-offset-8 decoration-4 decoration-amber-300 rounded-lg"
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </li>
  );
};

export default NavItem;
