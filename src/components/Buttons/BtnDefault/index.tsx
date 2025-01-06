import { BtnProps } from "../btnInterfaces"
import styles from "./BtnDefault.module.scss"

const BtnDefault = ({typeBtn, children}: BtnProps) => {
    return (
        <button className={styles.btnDefault} type={typeBtn}>
            {children}
        </button>
    )
}

export default BtnDefault