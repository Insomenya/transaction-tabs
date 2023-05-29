import * as React from 'react'

interface tabProps {
    children: React.ReactNode,
    index: number
}

const Tab = ({children, index}: tabProps) => {

    return (
        <div className='rounded-b-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-5px_rgba(0,0,0,0.04)] dark:bg-neutral-700 border-b-2 border-l border-r py-4 flex justify-center'>
            {children}
        </div>
    )
}

export default Tab;