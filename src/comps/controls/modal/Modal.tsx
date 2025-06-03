export function Modal() {
    return(
        <>
            <div style={{
                position: 'fixed',
                inset: 0,
                backgroundColor: '#00000088',
                zIndex: 998,
            }}>

            </div>
            <div style={{
                position: 'fixed',
                width: '80vw',
                height: '300px',
                background: '#fff',
                borderRadius: '25px',
                left: '50%',
                top: '50%',
                transform: 'translateX(-50%) translateY(-50%)',
                zIndex: 999,

            }}>
                <div style={{
                    position: 'absolute',
                    top:0,
                    width: '100%',
                    height: '50px',
                }}>
                    <button style={{
                        position: 'absolute',
                        right: 0,
                        height: '40px',
                        width: '40px',
                        borderRadius: '20px',
                        marginRight: '5px',
                        marginTop: '5px',
                        border: 'none'
                    }}>
                        <span className={"material-symbols-rounded"}>
                            close
                        </span>
                    </button>
                </div>
            </div>
        </>
    )
}