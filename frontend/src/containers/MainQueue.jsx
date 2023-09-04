import React, {useState, useEffect} from 'react'
import Card from '../components/Card'
import { Cancel, Done, Next } from '../components/Button'
import { getDataNextQueue, getQueueDisplay, postDataQueueDone } from '../utils/api'
import { Display } from '../pages/Display'

export const MainQueue = ({admin}) => {
    console.log(admin)
    const [data, setData] = useState({})
    const [queueValue, setQueueValue] = useState(0)

    useEffect(() => {
        const storedData = localStorage.getItem('queuedData');
        if (storedData) {
          setData(JSON.parse(storedData));
        }
      }, []);

    const handleNextClick = async ()=>{
        try{
            const nextData = await getDataNextQueue()
            const newData = {...nextData.data, admin: admin}
            
            // console.log(nextData)
            localStorage.setItem('queuedData', JSON.stringify(newData))
            setQueueValue(newData.queueValue)
            setData(newData);
            
        }catch(e){
            console.log(e)
        } 
    };

    console.log(data)
    console.log(queueValue)
    const handleDoneClick = async () => {
        try{
            const result = await postDataQueueDone(queueValue)
            setQueueValue(0)
            console.log(result)
            
            if(result.status){
                // Clear data from localStorage and state
                localStorage.removeItem('queuedData');
                setData([]);
                setData([])
                console.log(data)
                console.log(queueValue)
            }
        }catch(e){
            console.log(e)
            console.error(e)
        }
    }

    return (
        <div className='flex flex-col w-full mx-auto h-[90%] m-auto'>
            <div className='flex flex-col w-[90%] mx-auto h-[90%] m-auto' >
                {/* <div className='py-10 mb-5'> */}
                    <p className='font-bold text-[28px]'>Antrian</p>
                {/* </div> */}
                {Object.keys(data).length != 0 ? (
                    <div className='h-max flex flex-row justify-between basis-1/2 bg-gray-200 rounded-2xl mb-9'>
                        {/* {data.map((item, index)=>( */}
                            <Card data={data}/>
                        {/* // ))} */}
                    </div>
                ):(
                    <div className='h-max flex flex-row justify-between basis-1/2 bg-gray-200 rounded-2xl mb-9'>
                        <p className='text-gray-400 text-[24px] m-auto'>Tidak ada antrian</p>
                    </div>
                )}
                <div className='flex flex-row justify-between h-max text-white'>
                    <Cancel queue={data} />
                    <Done queue={data} onClick={handleDoneClick}/>
                    <Next queue={data} onClick={handleNextClick}/>
                </div>
                <div className='hidden'>
                    {console.log(data)}
                    <Display queue={data}/>
                </div>
            </div>
        </div>
    )
}