import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.scss"


const Footer = () => {
    return (
        <footer className={styles.main_footer}>
            <ul>
                <a href="https://github.com/Marchon1702" target="blonk">
                    <li><FaGithub size={20}/></li>
                </a>
                <a href="https://www.instagram.com/mt.marchon/" target="blank">
                    <li><FaInstagram size={20}/></li>
                </a>
                <a href="https://www.linkedin.com/in/matheus-marchon-2363941a1/" target="blank">
                    <li><FaLinkedin size={20}/></li>
                </a>
            </ul>
            <p>Desenvolvido por Matheus Marchon</p>
        </footer>
    )
}

export default Footer