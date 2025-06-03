export function CardGridView({children}:{children:React.ReactNode}) {

    return(
        <>
            <div style={{
                width:'100%',
                display:'flex',
                flexWrap: 'wrap',
                gap: '4vw',
                alignContent: 'flex-start',
                padding: '8vw'
            }}>
                {children}
            </div>
        </>
    )
}