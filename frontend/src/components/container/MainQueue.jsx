import React from 'react'
import Card from '../Card'
import { Cancel, Done, Next } from '../Button'

export const MainQueue = () => {
    const queue = false
    if(queue){
        return (
            <div className='flex flex-col w-[65%] mx-auto h-[90%] m-auto'>
                <div className='py-10 mb-5'>
                    <p className='font-bold text-[28px]'>Antrian</p>
                </div>
                <Card />
                <div className='flex flex-row justify-between h-max text-white'>
                    <Cancel queue={queue}/>
                    <Done queue={queue}/>
                    <Next queue={queue}/>
                </div>
            </div>
        )
    }else{
        return (
            <div className='flex flex-col w-[65%] mx-auto h-[90%] m-auto'>
                <div className='py-10 mb-5'>
                    <p className='font-bold text-[28px]'>Antrian</p>
                </div>
                <Card />
                <div className='flex flex-row justify-between h-max text-white'>
                    <Cancel queue={queue}/>
                    <Done queue={queue}/>
                    <Next queue={queue}/>
                </div>
            </div>
        )
    }
    
}