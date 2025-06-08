import styles from "./CardGrid.module.css"

export const CardGrid = ({children}:{children?:React.ReactNode}) => {

    return(
        <>
            <div className={styles.gridContainer}>
                {children}

            </div>
        </>
    )
}