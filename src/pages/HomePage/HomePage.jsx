import { useEffect, useState } from "react";
import { fetchTranding } from "../../API";
import ListTrends from "../../components/ListTrends/ListTrends";
import Paginatinon from "../../components/Paginatinon/Paginatinon";

export default function HomePage() {
  const [trends, setTrends] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    async function getTrends() {
      try {
        setPage(0);
        const data = await fetchTranding();
        setTrends(() => [...data.results]);
      } catch (error) {
        console.log(error);
      }
    }
    getTrends();
  }, [page]);

  return (
    <>
      <h1>Trends of the week</h1>
      <ListTrends trends={trends} />
      <Paginatinon
        next={() => setPage(() => page + 1)}
        back={() => setPage(() => page - 1)}
      />
    </>
  );
}
