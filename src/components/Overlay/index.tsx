import { ReactNode } from "react"
import styles from "./Overlay.module.scss"

interface OverlayProps {
    children: ReactNode
}

const Overlay = ({children}: OverlayProps) => {
    return (
        <section className={`${styles.overlay_center} ${styles.overlay}`}>
            {children}
        </section>      
    )
}

export default Overlay