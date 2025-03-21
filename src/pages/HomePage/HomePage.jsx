import { useEffect, useState } from "react";
import { fetchTranding } from "../../API";
import ListTrends from "../../components/ListTrends/ListTrends";
import Paginatinon from "../../components/Paginatinon/Paginatinon";

export default function HomePage() {
  const [trends, setTrends] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getTrends() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchTranding(page);
        setTrends(() => [...data.results]);
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
      <h1>Trends of the week</h1>
      <ListTrends trends={trends} />
      {error && <p>ERROR</p>}
      {isLoading && <h2>Loading...</h2>}
      {trends.length > 0 && (
        <Paginatinon
          next={() => setPage(() => page + 1)}
          back={() => setPage(() => page - 1)}
        />
      )}
    </>
  );
}
