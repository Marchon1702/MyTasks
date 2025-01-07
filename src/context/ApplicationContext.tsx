import { createContext, ReactNode, useState } from "react"
import { ITask } from "../interface/ITask";
export const ApplicationContext = createContext<any>(null);


interface ApplicationProviderProps {
    children: ReactNode
}


const ApplicationProvider = ({children}: ApplicationProviderProps) => {

    const [token, setToken] = useState<string>(() => {
        return sessionStorage.getItem("token") || ""
    });
    const [tasks, setTasks] = useState<ITask[]>([])

    return (
        <ApplicationContext.Provider 
        value={
            {
                token,
                setToken,
                tasks,
                setTasks
            }
        }>
            {children}
        </ApplicationContext.Provider>
    )
}

export default ApplicationProvider