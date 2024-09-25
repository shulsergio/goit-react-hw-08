import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

const Navigation = () => {
  const isLoggedIn = null; /////// ТУТ СЕЛЕКТОР selectIsLoggedIn
  return (
    <>
      <nav>
        <NavLink className={css.navLink} to="/">
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink className={css.navLink} to="/contacts">
            Contacts
          </NavLink>
        )}
      </nav>
    </>
  );
};
export default Navigation;
