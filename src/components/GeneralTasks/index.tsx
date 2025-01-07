import { useApplicationContext } from "../../hooks/useApplicationContext";
import { ITask } from "../../interface/ITask";
import EachTask from "./EachTask";
import styles from "./GeneralTasks.module.scss";

const GeneralTasks = () => {
  const { tasks } = useApplicationContext();

  return (
    <article className={styles.general_tasks}>
      <h3>Suas Tarefas</h3>
      <ul>
        {tasks.map((task: ITask) => (
          <EachTask 
            key={task.id} 
            task={task}
          />
        ))}
      </ul>
    </article>
  );
};

export default GeneralTasks;
