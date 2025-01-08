import { useApplicationContext } from "../../hooks/useApplicationContext";
import { ITask } from "../../interface/ITask";
import EachTask from "./EachTask";
import styles from "./GeneralTasks.module.scss";
import { useState } from "react";
import Overlay from "../Overlay";
import GenericModal from "../GenericModal";
import BtnDefault from "../Buttons/BtnDefault";
import AddTaskForm from "./AddTaskForm";
import MainHeader from "./MainHeader";

const GeneralTasks = () => {
  const { tasks, setTaskToEdit } = useApplicationContext();

  const [openAddModal, setOpenAddModal] = useState(false);

  return (
    <article className={styles.general_tasks}>
      <MainHeader />
      <h2>Suas Tarefas</h2>
      <div className={styles.task_area}>
        <ul>
          {
            tasks && (
              tasks.map((task: ITask) => <EachTask key={task.id} task={task} />)
            )
          }
        </ul>
        <div className={styles.addTask_area}>
          {openAddModal && (
            <Overlay>
              <GenericModal title="Adicionar Tarefa" setOpen={setOpenAddModal}>
                <AddTaskForm setOpen={setOpenAddModal} />
              </GenericModal>
            </Overlay>
          )}
          <BtnDefault typeBtn="submit" handleClick={() => {
            setTaskToEdit(null)
            setOpenAddModal(true)
          }}>
            Adicionar
          </BtnDefault>
        </div>
      </div>
    </article>
  );
};

export default GeneralTasks;
