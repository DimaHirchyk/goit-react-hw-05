import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { fetchMovieDetails } from "../../API";
import MovieDetail from "../../components/MovieDetail/MovieDetail";
import Loading from "../../components/Loading/Loading";

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { moviesId } = useParams();

  const location = useLocation();
  const backLink = useRef(location.state);

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
      {isLoading && <Loading />}
      {movie && <MovieDetail movie={movie} />}
      {error && <p>ERROR</p>}
    </>
  );
}
