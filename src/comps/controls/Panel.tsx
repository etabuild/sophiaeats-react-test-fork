type PanelItemProps = {
    size: 'large'
    title: string
    subtitle: string
    keyColor: string
}

export function Panel({size, title, subtitle, keyColor}: PanelItemProps) {
    console.log(title)
    return (
        <>
            <div className={`panel`}
                 style={{
                     scrollSnapAlign: 'start',
                     minWidth: '230px',
                     height: '230px',
                     borderRadius: '30px',
                     background: keyColor,
                     // background: 'linear-gradient(0deg,'+keyColor+'FF 0%, '+keyColor+'00 100%) #fff',
                     border: 'none 1px #666',
                     boxShadow: '0px 0px 5px rgba(0,0,0,0.3)',
                     display: 'inline-block',
                     position: 'relative'
                 }}>
                <div className={`panelText`} style={{
                    position: 'absolute',
                    bottom: 0,
                    padding: '0px 0 20px 30px'
                }}>

                    <p style={{
                        margin: 0,
                        color: '#fff',
                        fontWeight: '200',
                        position: 'relative',
                        top: '10px'
                    }}>{subtitle}</p>
                    <p style={{
                        margin: 0,
                        fontSize: '2em',
                        fontWeight: 'bold',
                        color: '#fff',
                    }}>{title}</p>
                </div>
            </div>
        </>
    )
}