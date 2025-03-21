export default function MovieInfo({ movie }) {
  return (
    <>
      <h1>{movie.original_title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        width={250}
        alt="poster"
      />
      <p>{movie.overview}</p>
      <p>Star: {movie.popularity}</p>
      <img
        src={
          movie.poster_path &&
          `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
        }
        width={250}
        alt="poster"
      />
      <p>Realize {movie.release_date}</p>
      <p>Duration: {movie.runtime} min</p>

      <h2>The movie was created by</h2>
      {movie.production_companies.map((company) => (
        <div key={company.id}>
          <p>{company.name}</p>
          <img
            src={`https://image.tmdb.org/t/p/w500/${company.logo_path}`}
            width={250}
            alt={company.name}
          />
        </div>
      ))}
    </>
  );
}
