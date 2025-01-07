import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DefaultPage from "./pages/DefaultPage";
import RegisterPage from "./pages/RegisterPage";
import TasksPage from "./pages/TasksPage";
import ApplicationProvider from "./context/ApplicationContext";

function App() {
  return (
    <BrowserRouter>
      <ApplicationProvider>
        <Routes>
          <Route path="/" element={<DefaultPage />}>
            <Route index element={<LoginPage />} />
            <Route path="resgistrar-se" element={<RegisterPage />} />
            <Route path="tarefas" element={<TasksPage />} />
          </Route>
        </Routes>
      </ApplicationProvider>
    </BrowserRouter>
  );
}

export default App;
