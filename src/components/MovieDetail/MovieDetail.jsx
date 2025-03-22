import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import css from "./MovieDetail.module.css";

export default function MovieDetail({ movie }) {
  return (
    <>
      <div className={css.count}>
        <img
          className={css.img}
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          width={250}
          alt="poster"
        />
        <div className={css.text}>
          <h1 className={css.name}>{movie.original_title}</h1>
          <p className={css.overview}>{movie.overview}</p>
          <p className={css.popularity}>Star: {movie.popularity}</p>{" "}
          <p className={css.popularity}>Realize {movie.release_date}</p>
          <p className={css.popularity}>Duration: {movie.runtime} min</p>
        </div>
      </div>
      <div className={css.backdrop}>
        <img
          className={css.backdrop_path}
          src={
            movie.poster_path &&
            `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
          }
          width={250}
          alt="poster"
        />
      </div>

      <h2 className={css.created}>The movie was created by</h2>
      <ul className={css.createdCompany}>
        {movie.production_companies.map((company) => (
          <li className={css.iteams} key={company.id}>
            <div>
              <p className={css.popularity}>{company.name}</p>
              <img
                src={`https://image.tmdb.org/t/p/w500/${company.logo_path}`}
                width={250}
                alt={company.name}
              />
            </div>
          </li>
        ))}
      </ul>
      <ul className={css.links}>
        <li className={css.link}>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li className={css.link}>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Suspense fallback={"Loadimg page..."}>
        <Outlet />
      </Suspense>
    </>
  );
}
