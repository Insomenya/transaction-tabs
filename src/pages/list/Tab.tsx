import * as React from 'react'

interface tabProps {
    children: React.ReactNode,
    index: number
}

const Tab = ({children, index}: tabProps) => {

    return (
        <>
            {children}
        </>
    )
}

export default Tab;