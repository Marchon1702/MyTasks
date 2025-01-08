import { BtnProps } from "../btnInterfaces"
import styles from "./BtnDefault.module.scss"

const BtnDefault = ({children, typeBtn, handleClick}: BtnProps) => {
    return (
        <button onClick={handleClick} className={styles.btnDefault} type={typeBtn}>
            {children}
        </button>
    )
}

export default BtnDefault