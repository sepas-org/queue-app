import React from 'react'

export default function Aside(){
    return(
        <div className='basis-1/5 h-full border-r-2'>
            <div className='pt-8 mb-8'>
                <img src="./src/assets/images/logo-uin.png" alt="" className="w-[150px] m-auto" />
            </div>
            <div className='p-5 text-center'>
                Queue
            </div>
            <div className='p-5 w-full text-center'>
                History
            </div>
        </div>
    )
}