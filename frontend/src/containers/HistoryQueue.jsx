import React from 'react';
import Card from '../components/Card';

export const HistoryQueue = () => {
    // const [historyQueue, setHistoryQueue] = useState([])
    
    // mock database
    const historyQueue = [
        {
            nama: "Paujan",
            nim: 23423,
            keperluan: "Surat kematian",
            queue: '012'
        },
        {
            nama: "Ojan",
            nim: 343423,
            keperluan: "Surat kematian juga",
            queue: '013'
        }
    ];

    // setHistoryQueue((history) => [...history, addHistoryQueue])

    return (
        <div className='flex flex-col w-[65%] mx-auto h-[90%] m-auto'>
            <div className='h-max flex flex-col justify-between basis-1/2 bg-gray-200 rounded-2xl mb-9'>
                {historyQueue.map((item, index)=>(
                    <Card key={index} item={item}/>
                ))}
            </div>
        </div>
    )
};