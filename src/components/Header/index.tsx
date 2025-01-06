import { Link } from "react-router-dom";
import styles from "./Header.module.scss"
import { MdOutlineLogin } from "react-icons/md";

const Header = () => {
    return (
        <header className={styles.top_header}>
            <div className={styles.logo_area}>
                <h1><img src="/images/MyTasks.png" alt="logo-myTasks" /></h1>
            </div>
            <div className={styles.login_logo}>
                <span>
                    <Link to="/">
                        <MdOutlineLogin
                            size={30}
                            cursor={"pointer"}
                        />
                    </Link>
                </span>
            </div>
        </header>
    )
}

export default Header