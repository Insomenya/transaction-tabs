import * as React from 'react'
import { useNavigate } from 'react-router-dom';
import listData from '../listData';
import { toTitleCase } from '../toTitleCase';

interface cardData{
    title: string
    count: number
    _id: number
}

const Summary = () => {
    const navigate = useNavigate();
    const typeDic = ['income', 'outcome', 'loan', 'investment'];
    const data = React.useMemo<cardData[]>(() => {
        let result: cardData[] = [];

        typeDic.forEach((transType, index) => {
            let tempData: cardData = {
                title: toTitleCase(typeDic[index]),
                count: listData.data
                    .filter((row) => row.type === transType).length,
                _id: index
            }

            result.push(tempData);
        });

        return result;
    }, []);

    return (
        <>
            <div className='max-w-2xl container mx-auto '>
                <div className='py-6'>
                    <div className='block bg-slate-50 p-4 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 border-t border-l border-r rounded-t-lg'></div>
                    <div className='flex flex-col justify-center items-center bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 border'>
                        <h2 className='mb-2 text-xl font-semibold leading-tight text-neutral-800 dark:text-neutral-50 text-center'>Welcome</h2>
                        <p className='px-10 self-start m-4'>With supporting text below as a natural lead-in to additional content.</p>
                        <button onClick={() => navigate('/navigator')} className='inline-block mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' >See transactions</button>
                    </div>
                    <div className='bg-slate-50 p-4 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 border-b border-l border-r rounded-b-lg flex justify-center'>
                        You have {listData.total} transactions
                    </div>
                </div>

                <div className='container mx-auto grid gap-6 grid-cols-2 grid-flow-row auto-rows-max'>
                    {data?.map((row) => (
                        <div key={row._id} className='flex flex-col rounded-lg justify-center items-start bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 border'>
                            <h5 className='mb-2 text-xl font-semibold leading-tight text-neutral-800 dark:text-neutral-50'>{row.count}</h5>
                            <p className='mt-2'>{row.title}</p>
                            <button className='bg-blue-500 self-end hover:bg-blue-700 text-white font-bold py-2 px-11 mt-4 rounded' onClick={() => navigate(`/navigator?${row._id}`)}>See all</button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Summary;