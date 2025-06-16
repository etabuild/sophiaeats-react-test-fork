import styles from "./DishMenuCard.module.css"

type DishMenuCardProps = {
    imgSrc: string;
    name: string;
    price: number;
    addDish: () => void;
}
export const DishMenuCard = ({imgSrc, name, price, addDish}: DishMenuCardProps) => {
    return (
        <>
            <div




                className={styles.container}
                style={{
                    background: `#fff`,
                    backgroundSize: 'cover',
                }}
            >
                <div className={styles.textContainer}>
                    <p
                        className={styles.dishName}
                    >{name}</p>
                    <p className={styles.price}>¥{price}</p>
                    <button className={styles.addButton}
                            onClick={addDish}>
                        <span className={"material-symbols-rounded"}>
                            add
                        </span>
                    </button>
                </div>
            </div>
        </>
    )
}