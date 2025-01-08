import styles from "./MainHeader.module.scss";
import { useApplicationContext } from "../../../hooks/useApplicationContext";
import { useEffect, useState } from "react";

const MainHeader = () => {
  const {atribuirTasks } = useApplicationContext()

  const [taskFilter, setTaskFilter] = useState("all") 

  useEffect(() => {
    atribuirTasks(taskFilter)
  }, [taskFilter])

  return (
    <header className={styles.main_header}>
      <select onChange={(e) => {
        setTaskFilter(e.target.value)
      }} name="view-tasks" id="view-tasks">
        <option value="all">Todas</option>
        <option value="finished">Concluidas</option>
        <option value="not finished">Não Concluidas</option>
      </select>
    </header>
  );
};

export default MainHeader;
