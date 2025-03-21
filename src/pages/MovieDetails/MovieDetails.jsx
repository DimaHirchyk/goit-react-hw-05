import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { fetchMovieDetails } from "../../API";
import MovieInfo from "../../components/MovieInfo/MovieInfo";

export default function MoviesPage() {
  const { moviesId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getMovie() {
      try {
        setError(false);
        setIsLoading(true);

        const data = await fetchMovieDetails(moviesId);
        setMovie(data);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getMovie();
  }, [moviesId]);

  return (
    <>
      {isLoading && <h2>Loading...</h2>}
      {movie && <MovieInfo movie={movie} />}
      {error && <p>ERROR</p>}

      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>

      <Outlet />
    </>
  );
}
