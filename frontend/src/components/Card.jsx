import React from 'react'

export default function Card({key, item}){
    if(item){
        return(
            <div className='h-[70%] w-[85%] flex flex-row justify-around m-auto'>
                <div className='basis-1/6 my-auto'>
                    <p className='text-[80px]'>{item.queue}</p>
                </div>
                <div key={key}className='basis-4/6 my-auto flex flex-col'>
                    <div className='mb-5'>
                        <label className='font-bold'>Nama: </label>
                        <p>{item.nama}</p>
                    </div>
                    <div className='mb-5'>
                        <label className='font-bold'>NIM</label>
                        <p>{item.nim}</p>
                    </div>
                    <div >
                        <label className='font-bold'>Keperluan</label>
                        <p>{item.keperluan}</p>
                    </div>
                </div>
            </div>
        )
    }else{
        return(
            <div className='h-max flex flex-row justify-between basis-1/2 bg-gray-200 rounded-2xl mb-9'>
                <div className='m-auto'>
                    <p className='text-gray-400 text-[24px]'>Tidak ada antrian</p>
                </div>
            </div>    
        )
    }
    
    
}