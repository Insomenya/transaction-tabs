import * as React from 'react'
import './../../index.css'
import Tabs from './Tabs';
import Tab from './Tab';
import listData from './listData';
import { dataRow, tabsData } from './types';
import ListTable from './ListTable';

const List = () => {
    const typeDic = ['income', 'outcome', 'loan', 'investment'];
    const headings = ['Name', 'Amount'];
    
    const data  = React.useMemo<tabsData[]> (() => {
        let result:tabsData[] = [];

        typeDic.forEach((transType, index) => {
            let tempData: tabsData = {
                title: typeDic[index],
                data: listData.data
                .filter((row) => row.type === transType)
                .map((row) => {
                    return {
                        name: row.name.first + ' ' + row.name.last,
                        amount: Number((Math.random() * 4000 + 1).toFixed(2)),
                        _id: row._id
                    } as dataRow;
                })
            }

            result.push(tempData);
        });

        return result;
    }, []);
    
    return (
        <div className='container mx-auto pb-6'>
            <Tabs titles={typeDic}>
                {data.map((tabData, index) => (
                    <Tab key={tabData.title} index={index}>
                        <ListTable {...{ tabData, headings }} />
                    </Tab>
                )) || 'No data'}
            </Tabs>
        </div>
    )
}

export default List;