import styles from "./EachTask.module.scss";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { ITask } from "../../../interface/ITask";
import { useApplicationContext } from "../../../hooks/useApplicationContext";
import Overlay from "../../Overlay";
import GenericModal from "../../GenericModal";
import { useState } from "react";
import AddTaskForm from "../AddTaskForm";

interface EachTasksProps {
  task: ITask;
}

const EachTask = ({ task }: EachTasksProps) => {
  const { atualizarTask, deletarTask, editarTask } = useApplicationContext();

  const [openEditModal, setOpenEditModal] = useState(false);

  return (
    <li className={styles.each_task}>
      <span className={styles.infos_task}>
        {task.nome}
        <p><strong>Prioridade:</strong> {task.prioridade}</p>
        <p><strong>Inicio:</strong> {task.dataInicio.replace(/-/g, "/")}</p>
        <p><strong>Fim:</strong> {task.dataFim.replace(/-/g, "/")}  </p>     
      </span>
      <span className={styles.actions_task}>
        <div className={styles.checkTask_area}>
          <label htmlFor={task.id.toString()}>
            {task.concluida ? (
              <ImCheckboxChecked color="#A8D25B" cursor={"pointer"} />
            ) : (
              <ImCheckboxUnchecked color="#A8D25B" cursor={"pointer"} />
            )}
          </label>
          <input
            type="checkbox"
            onChange={() => {
              atualizarTask({
                ...task,
                concluida: !task.concluida,
              });
            }}
            id={task.id.toString()}
          />
        </div>
        <FaEdit
          color="lightblue"
          size={20}
          cursor={"pointer"}
          onClick={() => {
            editarTask(task)
            setOpenEditModal(true)
          }}
        />
        <MdDelete
          color="red"
          size={23}
          cursor={"pointer"}
          onClick={() => deletarTask(task)}
        />
        {openEditModal && (
          <Overlay>
            <GenericModal title="Editar Tarefa" setOpen={setOpenEditModal}>
              <AddTaskForm setOpen={setOpenEditModal} />
            </GenericModal>
          </Overlay>
        )}
      </span>
    </li>
  );
};

export default EachTask;
