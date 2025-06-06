import {useModal} from "../modal/Modal.tsx";
import {AddItemModal} from "../modal/AddItemModal.tsx";

export function CardMenu({ imgSrc, name,price }: {imgSrc: string, name: string , price: number}) {
    const {openModal} = useModal()
    return (
        <>
            <div style={{
                width: '42vw',
                height: '40vw',
                borderRadius: '14px',
                background: `url(${imgSrc})`,
                backgroundSize: 'cover',
                position: 'relative',
                margin: 'auto',
                boxShadow: '0 0 10px #00000044',

            }}>
                <div style={{
                    width: '100%',
                    borderRadius: '0 0 14px 14px',
                    position: 'absolute',
                    bottom: 0,
                    height: '15vw',
                    background: '#FEF5EC',
                    display: 'grid',

                    gridTemplateColumns: '28vw 12vw',
                    gridTemplateRows: '7vw 8vw',
                }}>
                    <p style={{
                        margin: 0,
                        fontSize: '3.5vw',
                        lineHeight: '2.7',
                        paddingLeft: '15px'
                    }}>{name}</p>
                    <p style={{
                        margin: 0,
                        lineHeight: '0.9',
                        fontSize: '5.4vw',
                        paddingLeft: '15px',
                        fontWeight: 'bold',
                    }}>¥{price}</p>
                    <button style={{
                        color: '#EC473D',
                        background: '#ffd8b3',
                        gridRow: '1/3',
                        gridColumn: '2/3',
                        height: '7vw',
                        width: '7vw',
                        fontSize: '7vw',
                        padding: 0,
                        border: 'none',
                        borderRadius: '8vw',
                        margin: 'auto auto',
                    }}
                            onClick={() => {
                                openModal(
                                    <>
                                       <AddItemModal />
                                    </>
                                )
                            }}>
                        <span className={"material-symbols-rounded"}>
                            add
                        </span>
                    </button>
                </div>
            </div>
        </>
    )
}