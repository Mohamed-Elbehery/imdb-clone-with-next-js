import Image from "next/image";
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";

const Card = ({ movie }) => {
  return (
    <div className="group w-[430px] cursor-pointer p-3 sm:hover:dark:shadow-slate-400 sm:hover:shadow-gray-700 sm:hover:-translate-y-3 sm:shadow-xl rounded-lg sm:border-2 sm:border-slate-400 transition duration-500 ">
      <Link href={`movie/${movie.id}`}>
        <Image
          className="sm:w-[100%] w-[90%] sm:rounded-t-lg mx-auto transition duration-500 filter sepia group-hover:sepia-0"
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          alt={`${movie.original_title} Poster`}
          loading="lazy"
          width={500}
          height={300}
          placeholder="blur"
          blurDataURL="/spinner.svg"
          style={{ width: "100%", height: "auto" }}
        />
        <div className="p-2">
          <p className="line-clamp-2 text-md"> {movie.overview}</p>
          <h2 className="mt-4 font-bold text-xl">
            {movie.title || movie.name}
          </h2>
          <p className="flex items-center mt-4">
            {movie.release_data || movie.first_air_date || "2023-02-28"}
            <FiThumbsUp className="h-5 ml-5 mr-2" />
            {movie.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
