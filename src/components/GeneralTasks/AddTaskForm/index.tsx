import { useEffect, useState } from "react";
import styles from "./AddTaskForm.module.scss";
import { convertToDateOnly } from "../../../utils/convertToDateOnly";
import { useApplicationContext } from "../../../hooks/useApplicationContext";
import BtnAdd from "../../Buttons/BtnAdd";
import { MdAddTask } from "react-icons/md";

interface AddTaskFormProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const AddTaskForm = ({setOpen}: AddTaskFormProps) => {
  const { adicionarTask, taskToEdit } = useApplicationContext();

  const [nome, setNome] = useState("");
  const [prioridade, setPrioridade] = useState("Baixa")
  const [dataInicio, setDataInicio] = useState("")
  const [dataFim, setDataFim] = useState("")

  useEffect(() => {
    if(taskToEdit) {
      setNome(taskToEdit.nome)
      setPrioridade(taskToEdit.prioridade)
      setDataInicio(taskToEdit.dataInicio)
      setDataFim(taskToEdit.dataFim)
    }
  }, [taskToEdit])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await adicionarTask({
      nome: nome,
      prioridade: prioridade,
      dataInicio: convertToDateOnly(new Date(dataInicio)),
      dataFim: convertToDateOnly(new Date(dataFim)),
    });

    setOpen(false)
  };

  return (
    <form onSubmit={handleSubmit} className={styles.addTaskForm}>
      <div>
        <label htmlFor="newTask">Nova Tarefa </label>
        <input
          type="text"
          name="newTask"
          value={nome}
          id="newTask"
          placeholder="Nova tarefa..."
          onChange={(e) => setNome(e.target.value)}
        />
      </div>
      <div className={styles.select_input}>
        <label htmlFor="priority">Prioridade</label>
        <select value={prioridade} name="priority" id="priority" onChange={(e) => setPrioridade(e.target.value)}>
            <option value="Baixa">Baixa</option>
            <option value="Média">Média</option>
            <option value="Alta">Alta</option>
        </select>
      </div>
      <div>
        <label htmlFor="startDate">Data de Inicio</label>
        <input type="date" value={dataInicio} onChange={(e) => setDataInicio(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="endDate">Prazo Final</label>
        <input type="date" value={dataFim} onChange={(e) => setDataFim(e.target.value)}/>
      </div>
      <div className={styles.flex_inputs}>
        <span>Adicionar</span>
        <BtnAdd
            typeBtn="submit"
        >
            <MdAddTask size={35} color="green"/>
        </BtnAdd>
      </div>
    </form>
  );
};

export default AddTaskForm;
