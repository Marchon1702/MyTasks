import GeneralTasks from "../components/GeneralTasks"

const TasksPage = () => {
    return (
        <main>
            <section>
                <header>
                    <h2>Olá, Matheus! 😃</h2>
                    <select name="view-tasks" id="view-tasks">
                        <option value="all">
                            Todas
                        </option>
                        <option value="finished">
                            Concluidas
                        </option>
                        <option value="not finished">
                            Não Concluidas
                        </option>
                    </select>
                </header>
                <GeneralTasks />
            </section>
        </main>
    )
}

export default TasksPage