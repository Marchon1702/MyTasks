import EachTask from "./EachTask";
import styles from "./GeneralTasks.module.scss";

const GeneralTasks = () => {
  return (
    <article className={styles.general_tasks}>
      <h3>Suas Tarefas</h3>
      <ul>
        <EachTask/>
        <EachTask/>
        <EachTask/>
        <EachTask/>
        <EachTask/>
        <EachTask/>
        <EachTask/>
        <EachTask/>
        <EachTask/>
        <EachTask/>
        <EachTask/>
        <EachTask/>
      </ul>
    </article>
  );
};

export default GeneralTasks;
