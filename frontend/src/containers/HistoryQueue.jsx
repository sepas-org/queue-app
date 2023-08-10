import React,{useState, useEffect} from 'react';
import {RiCard} from '../components/Card';
import HistoryTable from '../components/HistoryTable';
import { getDataHistory } from '../utils/api';

export const HistoryQueue = async () => {
    const [historyQueue, setHistoryQueue] = useState([])
    

    useEffect(() => {
        async function fetchHistoryData() {
            try {
                const data = await getDataHistory();
                setHistoryQueue((prev) => [...prev, ...data]);
            } catch (error) {
                console.error('Error fetching history data:', error);
            }
        }

        fetchHistoryData();
    }, []);
    // mock database
    // const historyQueue = [
    //     {
    //         nama: "Paujan",
    //         nim: 23423,
    //         keperluan: "Surat kematian",
    //         queue: '012'
    //     },
    //     {
    //         nama: "Ojan",
    //         nim: 343423,
    //         keperluan: "Surat kematian juga",
    //         queue: '013'
    //     },
    //     {
    //         nama: "Ojan",
    //         nim: 343423,
    //         keperluan: "Surat kematian juga",
    //         queue: '013'
    //     },
    //     {
    //         nama: "Ojan",
    //         nim: 343423,
    //         keperluan: "Surat kematian juga",
    //         queue: '013'
    //     },
    //     {
    //         nama: "Ojan",
    //         nim: 343423,
    //         keperluan: "Surat kematian juga",
    //         queue: '013'
    //     }
    // ];

    // setHistoryQueue((history) => [...history, addHistoryQueue])
    return (
        <div className='flex flex-col w-[65%] mx-auto h-[90%] m-auto '>
            <p className='text-[40px] '>Riwayat Antrian</p>
            <div className='h-2/3 flex flex-col justify-between my-auto overflow-auto'>
                <HistoryTable data={historyQueue}/>
            </div>
        </div>
    )
    // return (
    //     <div className='flex flex-col w-[65%] mx-auto h-[90%] m-auto '>
    //         <p className='text-[40px] '>Riwayat Antrian</p>
    //         <div className='h-2/3 flex flex-col justify-between my-auto overflow-auto'>
    //             {historyQueue.map((item, index)=>(
    //                 <RiCard key={index} item={item}/>
    //             ))}
    //         </div>
    //     </div>
    // )
};