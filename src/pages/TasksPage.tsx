import { useEffect } from "react";
import GeneralTasks from "../components/GeneralTasks";
import MainHeader from "../components/GeneralTasks/MainHeader";
import MainSection from "../components/MainSection";
import { useApplicationContext } from "../hooks/useApplicationContext";
import { useNavigate } from "react-router-dom";

const TasksPage = () => {
  const { token, atribuirTasks } = useApplicationContext();

  const navigate = useNavigate()

  useEffect(() => {
    if(!token) navigate("/")

    atribuirTasks()
  }, [])

  useEffect(() => {
    if(!token) navigate("/")
  }, [token])

  return (
    <main>
      <MainSection>
        <MainHeader />
        <GeneralTasks />
      </MainSection>
    </main>
  );
};

export default TasksPage;
