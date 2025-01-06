import { Link } from "react-router-dom";
import BtnDefault from "../Buttons/BtnDefault";
import styles from "./Login.module.scss";

const Login = () => {
  return (
    <section className={styles.section_login}>
      <h1>Entrar</h1>
      <form>
        <div className={styles.input_area}>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="Seu email..." />
        </div>
        <div className={styles.input_area}>
          <label htmlFor="senha">Senha</label>
          <input id="senha" type="password" placeholder="Sua senha..." />
        </div>
        <div className={styles.btn_area}>
          <BtnDefault typeBtn="submit">Entrar</BtnDefault>
        </div>
        <div className={styles.register_redirect}>
          <span>
            Não tem uma conta? <Link to={"/resgistrar-se"}>Registrar-se</Link>{" "}
          </span>
        </div>
      </form>
    </section>
  );
};

export default Login;
