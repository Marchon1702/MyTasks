import { Link, useNavigate } from "react-router-dom";
import BtnDefault from "../Buttons/BtnDefault";
import styles from "./Login.module.scss";
import { useEffect, useRef, useState } from "react";
import { fazerLogin } from "../../services/requests";
import { useApplicationContext } from "../../hooks/useApplicationContext";
import { IErro } from "../../interface/IErros";
import { gerarId } from "../../utils";

const Login = () => {
  const { token, setToken } = useApplicationContext();

  useEffect(() => {
    if(token) navigate("/tarefas") 
  }, [])

  useEffect(() => {
    if(token) navigate("/tarefas") 
  }, [token])

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const iptEmailRef = useRef<HTMLInputElement>(null);
  const [erros, setErros] = useState<IErro[]>([]);

  useEffect(() => {}, [erros])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setErros(() => [])

    try {
      const tokenGerado = await fazerLogin({
        email: email,
        password: senha,
      });

      if(tokenGerado) {
        sessionStorage.setItem("token", tokenGerado);
        setToken(tokenGerado)
        navigate("/tarefas")
      }
            
      setEmail("");
      setSenha("");
      iptEmailRef.current?.focus();

    } catch (e) {
      setErros([{
        id: gerarId(),
        descricao: "Email ou senha incorretos"
      }])
      setEmail("");
      setSenha("");
      iptEmailRef.current?.focus();
    }
  };

  return (
    <section className={styles.section_login}>
      <h1>Entrar</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.input_area}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            value={email}
            required={true}
            type="email"
            placeholder="Seu email..."
            ref={iptEmailRef}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.input_area}>
          <label htmlFor="senha">Senha</label>
          <input
            id="senha"
            value={senha}
            required={true}
            type="password"
            placeholder="Sua senha..."
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        <ul className="ul_erros">
          {erros &&
            erros.map((e) => {
              return <li key={e.id}>*{e.descricao}*</li>;
            })}
        </ul>
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
