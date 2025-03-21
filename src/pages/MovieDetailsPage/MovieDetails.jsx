import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { fetchMovieDetails } from "../../API";
import MovieDetail from "../../components/MovieDetail/MovieDetail";

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { moviesId } = useParams();

  const backLink = useRef(location.state);
  const location = useLocation();

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
      <Link to={backLink.current ?? "/movies"}>Go back</Link>
      {isLoading && <h2>Loading...</h2>}
      {movie && <MovieDetail movie={movie} />}
      {error && <p>ERROR</p>}
    </>
  );
}
