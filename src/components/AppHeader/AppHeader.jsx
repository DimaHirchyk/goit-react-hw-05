import { NavLink } from "react-router-dom";
import css from "./AppHeader.module.css";
import clsx from "clsx";

const getLinkStyle = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function AppHeader() {
  return (
    <>
      <header className={css.header}>
        <nav className={css.nav}>
          <NavLink to="/" className={getLinkStyle}>
            Home
          </NavLink>
          <NavLink to="/movies" className={getLinkStyle}>
            Movies
          </NavLink>
        </nav>
      </header>
    </>
  );
}
