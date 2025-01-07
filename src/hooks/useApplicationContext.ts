import { useContext } from "react";
import { ApplicationContext } from "../context/ApplicationContext";
import { ITask } from "../interface/ITask";
import { atualizarTarefa, recuperarTarefas } from "../services/requests";

export const useApplicationContext = () => {
  const { token, setToken, tasks, setTasks } = useContext(ApplicationContext);

  const atribuirTasks = async () => {
    const tasksResponse = await recuperarTarefas();
    setTasks(tasksResponse)
  }

  const atualizarTask = async (task: ITask) => {
    const response = await atualizarTarefa(task)

    if(response !== 200) {
      throw new Error("O banco não foi atualizado")
    }

    setTasks((previousTasks: ITask[]) => {
      return previousTasks.map(pvTask => 
        pvTask.id === task.id ? {...task} : pvTask)
    })
  } 

  const concluidaToogle = (task: ITask) => {
    let updated: ITask[] = []
    setTasks((previousTasks: ITask[]) => {
      const updatedTasks = previousTasks.map(pTask => {
        if(pTask.id === task.id) {
          return {
            ...pTask,
            concluida: !pTask.concluida
          }
        }

        return pTask
      })

      updated = updatedTasks
      return updatedTasks
    })

    return updated
  }

  return {
    token,
    setToken,
    tasks,
    setTasks,
    atribuirTasks,
    atualizarTask,
    concluidaToogle
  };
};
