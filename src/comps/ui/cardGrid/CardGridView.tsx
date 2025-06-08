export function CardGridView({children}:{children:React.ReactNode}) {

    return(
        <>
            <div style={{
                width:'100%',
                // display:'flex',
                // flexWrap: 'wrap',
                // gap: '4vw',
                // alignContent: 'flex-start',
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '4vw'
            }}>
                {children}
            </div>
        </>
    )
}