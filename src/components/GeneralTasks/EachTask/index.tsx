import styles from"./EachTask.module.scss"

const EachTask = () => {
    return (
        <li className={styles.each_task}>
          Tarefa<span> Del, Edit, Finish</span>
        </li>
    )
}

export default EachTask