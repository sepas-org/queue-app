import React from 'react'
import { Queue, History } from './Button'

export default function Aside({onClickQueue, onClickHistory}){
    return(
        <div className='basis-1/5 h-full border-r-2'>
            <div className='pt-8 mb-8'>
                <img src="./src/assets/images/logo-uin.png" alt="" className="w-[150px] m-auto" />
            </div>
            <div className='p-5 text-center'>
                <Queue onClick={onClickQueue} />
            </div>
            <div className='p-5 w-full text-center'>
                <History onClick={onClickHistory} />
            </div>
        </div>
    )
}