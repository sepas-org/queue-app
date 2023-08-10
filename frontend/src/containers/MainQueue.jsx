import React, {useState, useEffect} from 'react'
import Card from '../components/Card'
import { Cancel, Done, Next } from '../components/Button'
import { getDataNextQueue, postDataQueueDone } from '../utils/api'

export const MainQueue = () => {
    const [data, setData] = useState([])
    const [queueValue, setQueueValue] = useState(0)



        const handleNextClick = async ()=>{
            try{
                
                    const nextData = await getDataNextQueue()
                    console.log(nextData)
                    setQueueValue(nextData.data.queueValue)
                    setData((prevData) => [...prevData, nextData.data]);
                
            }catch(e){
                console.log(e)
            } 
        };

        const handleDoneClick = async () => {
            try{
                const result = await postDataQueueDone(queueValue)
                console.log(result)
            }catch(e){
                console.log(e)
                console.error(e)
            }
        }
    

    
    console.log(data)
    if(data.length > 0){
        return (
            <div className='flex flex-col w-full mx-auto h-[90%] m-auto'>
                <div className='flex flex-col w-[90%] mx-auto h-[90%] m-auto' >
                    <div className='py-10 mb-5'>
                        <p className='font-bold text-[28px]'>Antrian</p>
                    </div>
                    <div className='h-max flex flex-row justify-between basis-1/2 bg-gray-200 rounded-2xl mb-9'>
                        {data.map((item, index)=>(
                            <Card index={index} item={item}/>
                        ))}
                    </div>
                    <div className='flex flex-row justify-between h-max text-white'>
                        <Cancel queue={data}/>
                        <Done queue={data} onClick={handleDoneClick}/>
                        <Next queue={data} onClick={handleNextClick}/>
                    </div>
                </div>
            </div>
        )
    }else{
        return (
            <div className='flex flex-col w-full'>
                <div className='flex flex-col w-[90%] mx-auto h-[90%] m-auto' >
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
                
            </div>
        )
    }
    
}