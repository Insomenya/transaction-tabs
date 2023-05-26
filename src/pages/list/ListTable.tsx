import * as React from 'react'
import { tabsData } from './types';

interface tableProps {
    data: tabsData
    headings: string[]
}

const ListTable = (props: tableProps) => {
    const headings = props.headings;
    const tableData = props.data;

    return (
        <>
            <table>
                <tr>
                    {headings?.map((heading) => (
                        <th>heading</th>
                    ))}
                </tr>
                {tableData?.data?.map((row) => (
                    <tr>
                        {headings?.map((heading) => (
                            <td>{row[heading]}</td>
                        ))}
                    </tr>
                ))}
            </table>
        </>
    )
}

export default ListTable;