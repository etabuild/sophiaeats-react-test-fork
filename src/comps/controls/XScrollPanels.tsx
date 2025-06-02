
import type { ReactNode } from 'react'



export function XScrollPanels({children}:{children:ReactNode}) {
    return (
        <>
            <div style={{
                scrollSnapType: 'y mandatory',
                padding: '15px',
                gap:'20px',
                display: 'flex',
                overflowX: 'scroll',
            }}>
                {children}
            </div>
        </>
    )
}