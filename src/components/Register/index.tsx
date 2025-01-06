import styles from "./Register.module.scss"
import { Link } from "react-router-dom";
import BtnDefault from "../Buttons/BtnDefault";

const Register = () => {
  return (
    <section className={styles.section_register}>
      <h1>Criar conta</h1>
      <form>
        <div className={styles.input_area}>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="Seu email..." />
        </div>
        <div className={styles.input_area}>
          <label htmlFor="confirm-email">Confirme seu email</label>
          <input id="email" type="email" placeholder="Seu email..." />
        </div>
        <div className={styles.input_area}>
          <label htmlFor="senha">Senha</label>
          <input id="senha" type="password" placeholder="Sua senha..." />
        </div>
        <div className={styles.input_area}>
          <label htmlFor="confirm-senha">Confirme sua senha</label>
          <input id="confirm-senha" type="password" placeholder="Sua senha..." />
        </div>
        <div className={styles.btn_area}>
          <BtnDefault typeBtn="submit">Criar Conta</BtnDefault>
        </div>
        <div className={styles.login_redirect}>
          <span>
            Já tem uma conta? <Link to={"/"}>Entrar</Link>{" "}
          </span>
        </div>
      </form>
    </section>
  );
};

export default Register;
