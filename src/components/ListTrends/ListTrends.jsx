export default function ListTrends({ trends }) {
  return (
    <ul>
      {trends.map((trend, index) => (
        <li key={trend.id}>
          <p> {index + 1}</p>
          <p>{trend.title}</p>
        </li>
      ))}
    </ul>
  );
}
