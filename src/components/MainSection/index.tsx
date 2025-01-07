import { ReactNode } from "react"

interface MainSectionProps {
    children: ReactNode
}

const MainSection = ({children}: MainSectionProps) => {
    return (
        <section>
        {children}
    </section>
    )   
}

export default MainSection