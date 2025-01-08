import { useEffect } from "react";
import GeneralTasks from "../components/GeneralTasks";
import MainSection from "../components/MainSection";
import { useApplicationContext } from "../hooks/useApplicationContext";
import { useNavigate } from "react-router-dom";

const TasksPage = () => {
  const { token } = useApplicationContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
      return;
    }
  }, []);

  useEffect(() => {
    if (!token) {
      navigate("/");
      return;
    }
  }, [token]);

  return (
    <main>
      <MainSection>
        <GeneralTasks />
      </MainSection>
    </main>
  );
};

export default TasksPage;
