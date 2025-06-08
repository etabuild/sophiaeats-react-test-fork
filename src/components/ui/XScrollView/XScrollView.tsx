import styles from "./XScrollView.module.css"
export const XScrollView = ({children}:{children?:React.ReactNode})=>{
    return(
        <>
            <div className={styles.container}>
                {children}
            </div>
        </>
    )
}