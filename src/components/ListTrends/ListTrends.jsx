import { Link } from "react-router-dom";

export default function ListTrends({ trends }) {
  return (
    <ul>
      {trends.map((trend, index) => (
        <li key={trend.id}>
          <Link to={`/${trend.id}`}>
            {index + 1}) {trend.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
