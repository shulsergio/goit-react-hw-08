import css from "./UserMenu.module.css";

const UserMenu = () => {
  return (
    <div className={css.box}>
      <p className={css.textBox}>Hello, username</p>
      <button type="button">Logout</button>
    </div>
  );
};
export default UserMenu;
