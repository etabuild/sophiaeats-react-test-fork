import styles from "./PageLayout.module.css"
import type {PageLayoutProps} from "./index.ts";
export const PageLayout = ({pageIcon, pageTitle, children, navigate, navigatePath}:PageLayoutProps) => {
    return (
        <>
            <div className={styles.pageRoot}>
                <div className={styles.pageHeader}>
                    <p><i className={"material-symbols-rounded"}>{pageIcon}</i><span>{pageTitle}</span></p>
                    <div className={styles.backButtonWrapper}>
                        <button className={styles.backButton}>
                            <i className={"material-symbols-rounded"} onClick={() => {
                                navigate("./../", {replace: true});
                            }}>arrow_back_ios_new</i>
                        </button>
                    </div>
                </div>
                <div className={styles.pageContent}>
                    {children}
                </div>
            </div>

        </>
    );
};