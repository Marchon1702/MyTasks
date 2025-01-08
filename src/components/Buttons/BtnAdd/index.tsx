import { BtnProps } from "../btnInterfaces";
import styles from "./BtnAdd.module.scss"

const BtnAdd = ({children, typeBtn}: BtnProps) => {
    return (
        <button type={typeBtn} className={styles.btnAdd}> {children} </button>
    )
}

export default BtnAdd