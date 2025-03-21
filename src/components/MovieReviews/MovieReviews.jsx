import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieRewiews } from "../../API";

export default function MovieReviews() {
  const { moviesId } = useParams();

  const [movie, setMovie] = useState({ results: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getRewies() {
      try {
        setError(false);
        setIsLoading(true);

        const data = await fetchMovieRewiews(moviesId);
        setMovie(data);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    if (!moviesId) return;

    getRewies();
  }, [moviesId]);
  return (
    <div>
      {isLoading && <h2>Loading...</h2>}
      {error && <p>ERROR</p>}
      <ul>
        {movie.results.map((res) => (
          <li key={res.id}>
            <h1>{res.author}</h1>
            <p>{res.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
