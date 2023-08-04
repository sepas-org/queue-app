import React, {useState} from 'react'
import Card from '../Card'
import { Cancel, Done, Next } from '../Button'

export const MainQueue = () => {
    const [queue, setQueue] = useState(false)
    const [data, setData] =useState([])
    const addData = {
        nama: "Paujan",
        nim: 23423,
        keperluan: "Surat kematian",
        queue: '012'
    }

    const handleNextClick = ()=>{
        setData((prevData) => [...prevData,addData])
        
    }
    console.log(data)
    if(data.length > 0){
        return (
            <div className='flex flex-col w-[65%] mx-auto h-[90%] m-auto'>
                <div className='py-10 mb-5'>
                    <p className='font-bold text-[28px]'>Antrian</p>
                </div>
                <Card data={data}/>
                <div className='flex flex-row justify-between h-max text-white'>
                    <Cancel queue={data}/>
                    <Done queue={data}/>
                    <Next queue={data} onClick={handleNextClick}/>
                </div>
            </div>
        )
    }else{
        return (
            <div className='flex flex-col w-[65%] mx-auto h-[90%] m-auto'>
                <div className='py-10 mb-5'>
                    <p className='font-bold text-[28px]'>Antrian</p>
                </div>
                <Card data={data}/>
                <div className='flex flex-row justify-between h-max text-white'>
                    <Cancel queue={data}/>
                    <Done queue={data}/>
                    <Next queue={data} onClick={handleNextClick}/>
                </div>
            </div>
        )
    }
    
}