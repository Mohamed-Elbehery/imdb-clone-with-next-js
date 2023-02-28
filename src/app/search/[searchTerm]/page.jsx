import Movies from "@/components/Movies/Movies";

const SearchPage = async ({ params }) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTerm}&language=en-US&include_adult=false&include_video=false`
  );

  if (!res.ok) {
    throw new Error("Error fetching data");
  }

  const data = await res.json();

  return (
    <div className="text-center pt-6">
      {data.results && data.results.length === 0 && <h1>No Results Found</h1>}
      {data.results && <Movies movies={data.results} />}
    </div>
  );
};

export default SearchPage;
