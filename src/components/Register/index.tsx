import styles from "./Register.module.scss";
import { Link, useNavigate } from "react-router-dom";
import BtnDefault from "../Buttons/BtnDefault";
import { useEffect, useState } from "react";
import { IErro } from "../../interface/IErros";
import { gerarId } from "../../utils/gerarId";
import { registrarConta } from "../../services/requests";

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");
  const [erros, setErros] = useState<IErro[]>([]);

  useEffect(() => {}, [erros]);

  const validaFormulario = () => {
    let valido = true;
    let errosTemp: IErro[] = [];

    if (email !== confirmEmail) {
      errosTemp.push({
        id: gerarId(),
        descricao: "Os emails não correspondem",
      });
      valido = false;
    }

    if (senha !== confirmSenha) {
      errosTemp.push({
        id: gerarId(),
        descricao: "As senhas não correspondem",
      });
      valido = false;
    }

    if (!/[A-Z]/.test(senha)) {
      errosTemp.push({
        id: gerarId(),
        descricao: "A senha deve conter pelo menos uma letra maiúscula.",
      });
      valido = false;
    }

    if (!/[a-z]/.test(senha)) {
      errosTemp.push({
        id: gerarId(),
        descricao: "A senha deve conter pelo menos uma letra minuscula.",
      });
      valido = false;
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(senha)) {
      errosTemp.push({
        id: gerarId(),
        descricao: "A senha deve conter pelo menos um caractere especial.",
      });
      valido = false;
    }

    if (!/\d/.test(senha)) {
      errosTemp.push({
        id: gerarId(),
        descricao: "A senha deve conter pelo menos um número.",
      });
      valido = false;
    }

    setErros(errosTemp);
    return valido;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErros(() => []);

    const valido = validaFormulario();
    if (!valido) return;

    const resposta = await registrarConta({
      email,
      password: senha,
    });

    if (resposta === 200) navigate("/");
    else {
      setErros([
        {
          id: gerarId(),
          descricao: "Esse email já existe!",
        },
      ]);
    }
  };

  return (
    <section className={styles.section_register}>
      <h1>Criar conta</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.input_area}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            value={email}
            type="email"
            required={true}
            placeholder="Seu email..."
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.input_area}>
          <label htmlFor="confirm-email">Confirme seu email</label>
          <input
            id="confirm_email"
            value={confirmEmail}
            type="email"
            required={true}
            placeholder="Seu email..."
            onChange={(e) => setConfirmEmail(e.target.value)}
          />
        </div>
        <div className={styles.input_area}>
          <label htmlFor="senha">Senha</label>
          <input
            id="senha"
            type="password"
            required={true}
            value={senha}
            placeholder="Sua senha..."
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        <div className={styles.input_area}>
          <label htmlFor="confirm-senha">Confirme sua senha</label>
          <input
            id="confirm_senha"
            value={confirmSenha}
            type="password"
            required={true}
            placeholder="Sua senha..."
            onChange={(e) => setConfirmSenha(e.target.value)}
          />
        </div>
        <ul className="ul_erros">
          {erros &&
            erros.map((e) => {
              return <li key={e.id}>*{e.descricao}*</li>;
            })}
        </ul>
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
