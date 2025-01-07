import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { MdOutlineLogin, MdOutlineLogout } from "react-icons/md";
import { useApplicationContext } from "../../hooks/useApplicationContext";
import { deslogar } from "../../services/requests";

const Header = () => {
  const { token, setToken } = useApplicationContext();

  return (
    <header className={styles.top_header}>
      <div className={styles.logo_area}>
        <h1>
          <img src="/images/MyTasks.png" alt="logo-myTasks" />
        </h1>
      </div>
      <div className={styles.login_logo}>
        <span>
          {!token ? (
            <Link to="/">
              <MdOutlineLogin size={30} cursor={"pointer"} />
            </Link>
          ) : (
            <MdOutlineLogout
              size={30}
              cursor={"pointer"}
              onClick={() => {
                deslogar();
                setToken("");
              }}
            />
          )}
        </span>
      </div>
    </header>
  );
};

export default Header;
