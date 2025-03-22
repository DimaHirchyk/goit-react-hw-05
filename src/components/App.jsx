import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import css from "./App.module.css";
import AppHeader from "./AppHeader/AppHeader";
import NotFoundPage from "../pages/NotFound/NotFound";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const MoviePage = lazy(() => import("../pages/MoviePage/MoviePage"));
const MovieCast = lazy(() => import("./MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("./MovieReviews/MovieReviews"));
const MovieDetailsPage = lazy(() =>
  import("../pages/MovieDetailsPage/MovieDetailsPage")
);

function App() {
  return (
    <div className={css.container}>
      <AppHeader />
      <Suspense fallback={"Loadimg page..."}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviePage />} />
          <Route path="/movies/:moviesId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
