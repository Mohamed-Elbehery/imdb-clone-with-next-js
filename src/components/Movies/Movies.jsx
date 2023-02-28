import Card from "./Card";

const Movies = ({ movies }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6 items-center mt-10">
      {movies.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Movies;
