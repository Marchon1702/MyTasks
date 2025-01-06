import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import DefaultPage from './pages/DefaultPage'
import RegisterPage from './pages/RegisterPage'
import TasksPage from './pages/TasksPage'

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultPage/>}>
            <Route index element={<LoginPage />} />
            <Route path="resgistrar-se" element={<RegisterPage />}/>
            <Route path="tarefas" element={<TasksPage />}/>
          </Route>
        </Routes> 
      </BrowserRouter>
  )
}

export default App
