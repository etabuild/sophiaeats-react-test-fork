export function CardMenu() {
    return(
        <>
            <div style={{
                width: '40vw',
                height: '40vw',
                borderRadius: '14px',
                background:'white',
                position: 'relative',
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
                    }}>メニュー</p>
                    <p style={{
                        margin: 0,
                        lineHeight: '0.9',
                        fontSize: '5.4vw',
                        paddingLeft: '15px',
                        fontWeight: 'bold',
                    }}>¥450</p>
                    <button style={{
                        color: '#EC473D',
                        backgroundColor: '#FFCE9F',
                        gridRow: '1/3',
                        gridColumn: '2/3',
                        background:'none',
                        height: '7vw',
                        width: '7vw',
                        fontSize: '7vw',
                        padding:0,
                        border:'none',
                        borderRadius: '8vw',
                        margin: 'auto auto',
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