import { useEffect } from "react"
import Register from "../components/Register"
import { useApplicationContext } from "../hooks/useApplicationContext"
import { useNavigate } from "react-router-dom"

const RegisterPage = () => {

    const {token} = useApplicationContext()
    const navigate = useNavigate()

    useEffect(() => {
        if(token) navigate("/tarefas")
    }, [])

    useEffect(() => {
        if(token) navigate("/tarefas")
    }, [token])

    return (
        <main>
            <Register />
        </main>
    )
}

export default RegisterPage