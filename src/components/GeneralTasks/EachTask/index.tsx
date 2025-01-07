import styles from "./EachTask.module.scss";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { ITask } from "../../../interface/ITask";
import { useApplicationContext } from "../../../hooks/useApplicationContext";

interface EachTasksProps {
  task: ITask
}

const EachTask = ({task}: EachTasksProps) => {

  const  {atualizarTask} = useApplicationContext()

  return (
    <li title={task.descricao} className={styles.each_task}>
      {task.nome}
      <span>
        <MdDelete cursor={"pointer"}/>
        <FaEdit cursor={"pointer"}/>
        <div className={styles.checkTask_area}>
          <label htmlFor={task.id.toString()}>
            {task.concluida ? <ImCheckboxChecked cursor={"pointer"}/> : <ImCheckboxUnchecked cursor={"pointer"}/>}
          </label>
          <input
            type="checkbox"
            onChange={() => {
              atualizarTask({
                ...task,
                concluida: !task.concluida
              })
            }}
            id={task.id.toString()}
          />
        </div>
      </span>
    </li>
  );
};

export default EachTask;
