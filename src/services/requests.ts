import http from "../http";
import { ILoginRequest } from "../interface/ILoginRequest";
import { ITask } from "../interface/ITask";
import { ITaskRequest } from "../interface/ITaskRequest";

export const fazerLogin = async (
  bodyRequest: ILoginRequest
): Promise<string> => {
  try {
    const response = await http.post("/auth/login", bodyRequest, {
      withCredentials: true,
    });

    if (response.status !== 200) {
      throw new Error("Erro ao fazer o login!");
    }

    const token = response.data.accessToken;
    return token;
  } catch (e) {
    console.error("Erro ao fazer login:", e);
    throw e;
  }
};

export const deslogar = async (): Promise<void> => {
  try {
    const response = await http.post("/auth/logout");
    console.log(response);
    if (response.status !== 200) throw new Error("Bad Request!");

    sessionStorage.removeItem("token");
  } catch (e) {
    console.error(e);
  }
};

export const registrarConta = async (
  novaConta: ILoginRequest
): Promise<object | number> => {
  try {
    const response = await http.post("/auth/register", novaConta);
    if (response.status !== 200) {
      return response.data;
    }

    return response.status;

  } catch (e: any) {
    return e.response?.data || {errors: ["Erro desconhecido"]}
  }
};

export const recuperarTarefas = async (): Promise<ITask[] | undefined> => {
  try {
    const response = await http.get("/tarefas")

    const tarefas = await response.data

    return tarefas

  } catch (e) {
    console.error("Não foi possivel recuperar suas tarefas" + e)
  }
}

export const atualizarTarefa = async (tarefa: ITask): Promise<number> => {

  try {
    const response = await http.put("/tarefas", tarefa)

    return response.status
  }catch (e) {
    throw new Error("Não foi possivel atualizar tarefa" + e)
  } 
}

export const deletarTarefa = async (tarefa: ITask): Promise<number> => {
  try {
    const response = await http.delete(`/tarefas/${tarefa.id}`)

    return response.status

  } catch (e) {
    throw new Error("Não foi possivel deletar tarefa" + e)
  }
}

export const adicionarTarefa = async (tarefa: ITaskRequest): Promise<number> => {
  try {
    const response = await http.post("/tarefas", tarefa)

    return response.status

  } catch (e) {
    throw new Error("Tarefa não adicionada" + e)
  }
}
