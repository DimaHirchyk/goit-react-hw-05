import { Route, Router, Routes } from "react-router-dom";
import css from "./App.module.css";
import AppHeader from "./AppHeader/AppHeader";
import HomePage from "../pages/HomePage/HomePage";
import MoviePage from "../pages/MoviePage/MoviePage";
import MovieDetailsPage from "../pages/MovieDetails/MovieDetails";
import NotFoundPage from "../pages/NotFound/NotFound";
import MovieCast from "./MovieCast/MovieCast";
import MovieReviews from "./MovieReviews/MovieReviews";

function App() {
  return (
    <div className={css.container}>
      <AppHeader />

      <Routes>
        <Route path="/" element={<HomePage />} />{" "}
        <Route path="/movies" element={<MoviePage />} />
        <Route path="/:moviesId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
