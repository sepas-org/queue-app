import React,{useState, useEffect} from 'react';
import {RiCard} from '../components/Card';
import HistoryTable from '../components/HistoryTable';
import { getDataHistory } from '../utils/api';

export const HistoryQueue = () => {
    const [historyQueue, setHistoryQueue] = useState([])
    

    
    useEffect( ()=>{
        const fetchDataHistory = async () => {
            try{
                const data = await getDataHistory();
                setHistoryQueue((prev) => [...prev, ...data])
            }catch(e){
                console.log(e);
                console.error(e);
            }
        };
        
        fetchDataHistory();

    },[])
    
           
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
        <div className='flex flex-col w-full mx-auto h-[90%] m-auto '>
            <div className='flex flex-col w-[90%] mx-auto h-[99%] m-auto' >
                <p className='text-[40px] '>Riwayat Antrian</p>
                <div className='h-2/3 flex flex-col justify-between my-auto overflow-auto'>
                    <HistoryTable data={historyQueue}/>
                </div>
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