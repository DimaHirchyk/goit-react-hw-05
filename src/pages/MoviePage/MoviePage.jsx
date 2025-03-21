import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchSearchMovie } from "../../API";
import MovieList from "../../components/MovieList/MovieList";

export default function MoviePage() {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextParams = new URLSearchParams(searchParams);

    nextParams.set("query", e.target.search.value.trim());
    setSearchParams(nextParams);
    e.target.reset();
  };

  useEffect(() => {
    async function getMovie() {
      if (!query) return;

      try {
        setError(false);
        setIsLoading(true);
        const data = await fetchSearchMovie(query);
        setMovie(data);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getMovie();
  }, [query]);

  return (
    <>
      {isLoading && <h2>Loading...</h2>}
      {error && <p>ERROR</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button>Search</button>
      </form>
      {movie && <MovieList movie={movie} />}
    </>
  );
}
