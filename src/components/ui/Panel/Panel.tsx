import styles from "./Panel.module.css"
import type {PanelItemProps} from "./index.ts";
export const Panel = (
    {size, title, subtitle, keyColor, imgSrc}: PanelItemProps
) => {
    return (
        <>
            <div className={styles.panel} style={{
                backgroundSize: 'cover',
                background: `linear-gradient(0deg,${keyColor}FF 20%, ${keyColor}DD 60%,${keyColor}77 100%),  url(${imgSrc})`,

            }}>
                <div className={styles.panelText}>
                    <p className={styles.subtitle}>
                        {subtitle}
                    </p>
                    <p className={styles.title}>
                        {title}
                    </p>
                </div>
            </div>
        </>
    );
};