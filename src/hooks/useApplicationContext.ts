import { useContext } from "react";
import { ApplicationContext } from "../context/ApplicationContext";
import { ITask } from "../interface/ITask";
import {
  adicionarTarefa,
  atualizarTarefa,
  deletarTarefa,
  recuperarTarefas,
} from "../services/requests";
import { ITaskRequest } from "../interface/ITaskRequest";

export const useApplicationContext = () => {
  const {
    token,
    setToken,
    tasks,
    setTasks,
    taskToEdit,
    setTaskToEdit
  } = useContext(ApplicationContext);

  const atribuirTasks = async (filtro: string) => {
    const tasksResponse = await recuperarTarefas();
    filtrarTasks(filtro, tasksResponse)
  };

  const adicionarTask = async (task: ITaskRequest) => {
    if (taskToEdit) {
      taskToEdit.nome = task.nome;
      taskToEdit.prioridade = task.prioridade;
      taskToEdit.dataInicio = task.dataInicio;
      taskToEdit.dataFim = task.dataFim;
      await atualizarTask(taskToEdit);

      setTaskToEdit(null);
      return;
    }

    const response = await adicionarTarefa(task);

    if (response !== 201) {
      throw new Error("A tarefa não foi adicionada");
    }

    const tarefasAtualizadas = await recuperarTarefas();
    setTasks(tarefasAtualizadas);
  };

  const deletarTask = async (task: ITask) => {
    const response = await deletarTarefa(task);

    if (response !== 204) {
      throw new Error("A tarefa não foi apagada");
    }

    const tarefasAtualizadas = await recuperarTarefas();
    setTasks(tarefasAtualizadas);
  };

  const atualizarTask = async (task: ITask) => {
    const response = await atualizarTarefa(task);

    if (response !== 200) {
      throw new Error("O banco não foi atualizado");
    }

    const tarefasAtualizadas = await recuperarTarefas();
    setTasks(tarefasAtualizadas);
  };

  const editarTask = (taskToEdit: ITask) => setTaskToEdit(taskToEdit);

  const filtrarTasks = (filtro: string, tasksToAdd: ITask[] | undefined) => {
    if(!tasksToAdd) return;

    switch (filtro) {
      case "all":
        setTasks([...tasksToAdd])
        break;
      case "finished":
        setTasks(() => {
          return [...tasksToAdd.filter((t: ITask) => t.concluida)];
        });
        break;
      case "not finished":
        setTasks(() => {
          return [...tasksToAdd.filter((t: ITask) => t.concluida === false)];
        });
        break;
      default:
        break;
    }
  };

  return {
    token,
    setToken,
    tasks,
    setTasks,
    taskToEdit,
    setTaskToEdit,
    adicionarTask,
    atribuirTasks,
    editarTask,
    atualizarTask,
    deletarTask,
    filtrarTasks
  };
};
