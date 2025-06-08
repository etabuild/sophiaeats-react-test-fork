import {CardGrid} from "./CardGrid.tsx"
export const CardGridContainer = ({children}:{children?:React.ReactNode}) => {
    return(
        <CardGrid>{children}</CardGrid>
    )
}