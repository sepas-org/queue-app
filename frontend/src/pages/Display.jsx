import React, { useState, useEffect } from 'react'
import { getQueueDisplay } from '../utils/api'
import { divCounter } from '../assets/css/style'



export const Display = ()=>{
    const [counter1, setCounter1] = useState([])
    const [counter2, setCounter2] = useState([])
    const [counter3, setCounter3] = useState([])

    const fetchData = async () => {
        const data1 = await getQueueDisplay("admin1");
        const data2 = await getQueueDisplay("admin2");
        const data3 = await getQueueDisplay("admin3");

        console.log(data1);
        setCounter1(data1);
        setCounter2(data2);
        setCounter3(data3);
    };

    useEffect(() => {
        // Fetch data initially
        fetchData();

        // Fetch data every 10 seconds (adjust the interval as needed)
        const interval = setInterval(fetchData, 3000);

        // Cleanup the interval on component unmount
        return () => {
            clearInterval(interval);
        };
    }, []);
    
        // console.log(counter1[0].queueValue)
    return(
        <>
            <div className='absolute flex flex-row flex-wrap justify-between w-10/12 p-10 center h-5/6 gap-14'>
                <div className='box-content flex flex-col justify-between shadow-xl basis-4/12 rounded-3xl border-2'>
                    <div className='relative p-10 h-1/5 rounded-t-3xl'>
                        <span className='absolute text-3xl font-bold center'>Antrian</span>
                    </div>
                    <div className='relative p-10 h-2/5'>
                        <span className='absolute font-bold center text-8xl'>2</span>
                    </div>
                    <div className='relative p-10 h-1/5 rounded-b-3xl'>
                        <span className='absolute text-[26px] font-bold center'>Kocak</span>
                    </div>
                </div>
                <div className='border border-red-500 border-solid basis-6/12'>
                    <h1>Kocak</h1>
                </div>
                <div className={divCounter}>
                    <div className='relative p-10 rounded-t-3xl h-2/3'>
                        <span className='absolute font-bold center text-7xl'>{(counter1[0]) ? counter1[0].queueValue : "0"}</span>
                    </div>
                    <div className='relative p-10 rounded-b-3xl'>
                        <span className='absolute text-3xl font-bold center md:text-xl'>Counter 1</span>
                    </div>
                </div>
                <div className={divCounter}>
                    <div className='box-content relative flex flex-col justify-between p-14 rounded-t-3xl'>
                        <span className='absolute font-bold center text-7xl'>{(counter2[0]) ? counter2[0].queueValue : "0"}</span>
                    </div>
                    <div className='relative p-10 h-1/3 rounded-b-3xl'>
                        <span className='absolute text-3xl font-bold center md:text-xl'>Counter 2</span>
                    </div>
                </div>
                <div className={divCounter}>
                    <div className='box-content relative flex flex-col justify-between p-10 rounded-t-3xl'>
                        <span className='absolute font-bold center text-7xl'>{(counter3[0]) ? counter3[0].queueValue : "0"}</span>
                    </div>
                    <div className='relative p-10 rounded-b-3xl'>
                        <span className='absolute text-3xl font-bold center md:text-xl'>Counter 3</span>
                    </div>
                </div>
            </div>
        </>
    )
}