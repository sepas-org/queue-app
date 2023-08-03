import React from 'react'

export default function Card(){
    const queue = false
    if(queue){
        return(
            <div className='h-max flex flex-row justify-between basis-1/2 bg-gray-200 rounded-2xl mb-9'>
                <div className='h-[70%] w-[85%] flex flex-row justify-around m-auto'>
                    <div className='basis-1/6 my-auto'>
                        <img src="./src/assets/images/405.png" alt="" className='w-full m-auto border-2'/>
                    </div>
                    <div className='basis-4/6 my-auto flex flex-col'>
                        <div className='mb-5'>
                            <label className='font-bold'>Nama: </label>
                            <p>Muhamad Julpan Zhafran Yahya</p>
                        </div>
                        <div className='mb-5'>
                            <label className='font-bold'>NIM</label>
                            <p>1234567891011</p>
                        </div>
                        <div >
                            <label className='font-bold'>Keperluan</label>
                            <p>Membuat surat pembasmi iblis</p>
                        </div>
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