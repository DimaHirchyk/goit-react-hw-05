import { Link, useLocation } from "react-router-dom";

export default function MovieList({ movie }) {
  const location = useLocation();
  return (
    <ul>
      {movie.map((trend, index) => (
        <li key={trend.id}>
          <Link to={`/movie/${trend.id}`} state={location}>
            {index + 1}) {trend.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
