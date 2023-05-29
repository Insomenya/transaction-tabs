import * as React from 'react'
import { tabsData } from './types';

interface tableProps {
    tabData: tabsData
    headings: string[]
}

const ListTable = (props: tableProps) => {
    const headings = props.headings;
    const tableData = props.tabData;

    return (
        <>
            <table className='min-w-full text-left text-sm font-light'>
                <thead>
                    <tr className='border-b font-medium dark:border-neutral-500'>
                        {headings?.map((heading) => (
                            <th className='px-6 py-4' key={heading}>{heading}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {tableData?.data?.map((row, index) => (
                        <tr className={`${(tableData?.data?.length && index !== tableData.data?.length - 1) ? 'border-b' : ''} dark:border-neutral-500`} key={'row-' + row['_id'] + index}>
                            {headings?.map((heading, cellIndex) => (
                                <td className='whitespace-nowrap px-6 py-4' key={'cell-' + row['_id'] + cellIndex}>{row[heading.toLowerCase()]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default ListTable;