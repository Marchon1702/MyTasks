import { ReactNode } from "react"

export interface BtnProps {
    children: ReactNode
    typeBtn: "button" | "submit" | "reset"
    handleClick?: () => void
}