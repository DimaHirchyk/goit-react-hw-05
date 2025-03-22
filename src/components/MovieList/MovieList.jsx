import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

export default function MovieList({ movie }) {
  const location = useLocation();
  return (
    <ul className={css.list}>
      {movie.map((trend, index) => (
        <li className={css.iteams} key={trend.id}>
          <Link
            to={`/movies/${trend.id}`}
            state={location}
            className={css.iteam}>
            {index + 1}) {trend.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
