import styles from "./MainHeader.module.scss";

const MainHeader = () => {
  return (
    <header className={styles.main_header}>
      <h2>Olá, Matheus! 😃</h2>
      <select name="view-tasks" id="view-tasks">
        <option value="all">Todas</option>
        <option value="finished">Concluidas</option>
        <option value="not finished">Não Concluidas</option>
      </select>
    </header>
  );
};

export default MainHeader;
