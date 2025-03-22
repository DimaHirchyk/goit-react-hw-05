import { useEffect, useState } from "react";
import { fetchMovieCredits } from "../../API";
import { useParams } from "react-router-dom";
import css from "./MovieCast.module.css";

export default function MovieCast() {
  const { moviesId } = useParams();

  const [movie, setMovie] = useState({ cast: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getCast() {
      try {
        setError(false);
        setIsLoading(true);

        const data = await fetchMovieCredits(moviesId);
        setMovie(data);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    if (!moviesId) return;

    getCast();
  }, [moviesId]);

  return (
    <>
      {isLoading && <h2>Loading...</h2>}
      {error && <p>ERROR</p>}
      <ul className={css.cast}>
        {movie.cast ? (
          movie.cast.map((cost) => (
            <li key={cost.id} className={css.iteam}>
              <div>
                <p className={css.name}>{cost.name}</p>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${cost.profile_path}`}
                  width={250}
                  alt={cost.name}
                />
              </div>
            </li>
          ))
        ) : (
          <p>No cast information available.</p>
        )}
      </ul>
    </>
  );
}
