import { Route, Router, Routes } from "react-router-dom";
import css from "./App.module.css";
import AppHeader from "./AppHeader/AppHeader";
import HomePage from "../pages/HomePage/HomePage";

function App() {
  return (
    <div className={css.container}>
      <AppHeader />

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movies" element={<HomePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
