import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchMovieRewiews } from "../../API";
import css from "./MovieReviews.module.css";

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
      <Link to={`/movies/${moviesId}`}>Back</Link>
      {isLoading && <h2>Loading...</h2>}
      {error && <p>ERROR</p>}
      <ul>
        {movie.results.map((res) => (
          <li key={res.id} className={css.iteam}>
            <h1 className={css.author}>{res.author}</h1>
            <p className={css.content}>{res.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
