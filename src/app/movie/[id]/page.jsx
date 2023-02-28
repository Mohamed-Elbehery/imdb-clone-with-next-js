import Image from "next/image";
import { FiThumbsUp } from "react-icons/fi";

const getMovie = async (movieId) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  return await res.json();
};

const MoviePage = async ({ params }) => {
  const movieId = params.id;
  const movie = await getMovie(movieId);

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center mx-auto content-center max-w-6xl md:space-x-6">
        <Image
          className="rounded-lg"
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          alt={`${movie.original_title} Poster`}
          loading="lazy"
          width={500}
          height={300}
          placeholder="blur"
          blurDataURL="/spinner.svg"
          style={{ width: "100%", height: "100%" }}
        />
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">
            {movie.title || movie.name}
          </h2>
          <p className="text-lg mb-3">
            <span className="font-bold mr-2">Overview :</span>
            {movie.overview}
          </p>
          <p className="text-lg mb-3">
            <span className="font-bold mr-2">Date Released :</span>
            {movie.release_date || movie.first_air_data}
          </p>
          <p className="text-lg mb-3 flex items-center">
            <span className="font-bold mr-2">Rating :</span>
            {movie.vote_count}
            <FiThumbsUp className="ml-3" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
