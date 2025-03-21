import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { fetchSearchMovie } from "../../API";

export default function MoviePage() {
  const [movie, setMovie] = useState([]);
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
        console.log(data);
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
      <ul>
        {movie.length > 0 ? (
          movie.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </ul>
    </>
  );
}
