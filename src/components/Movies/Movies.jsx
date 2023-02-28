const Movies = ({ movies }) => {
  return (
    <div>
      {movies.map((movie) => (
        <p key={movie.name}>{movie.original_title}</p>
      ))}
    </div>
  );
};

export default Movies;
