import { useEffect, useState } from "react";
import { fetchTranding } from "../../API";
import MovieList from "../../components/MovieList/MovieList";
import Paginatinon from "../../components/Paginatinon/Paginatinon";
import css from "./HomePage.module.css";
import Loading from "../../components/Loading/Loading";

export default function HomePage() {
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getTrends() {
      try {
        setError(false);
        setIsLoading(true);

        const data = await fetchTranding(page);
        setMovie(() => [...data.results]);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getTrends();
  }, [page]);

  return (
    <>
      <h1 className={css.title}>Trends of the week</h1>
      <MovieList movie={movie} />
      {error && <p>ERROR</p>}

      {isLoading && <Loading />}
      {movie.length > 0 && (
        <Paginatinon
          next={() => setPage(() => page + 1)}
          back={() => setPage(() => page - 1)}
        />
      )}
    </>
  );
}
