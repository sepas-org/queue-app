import React from 'react'

export default function Longcard(){
    return(
        <div className='w-full border-l-2 flex flex-co'>
            <h1 className='m-auto'>Daftar Antrian Counter 1</h1>
            <div className=' flex flex-row justify-between rounded-xl text-sm'>
            {/* <div className=' flex flex-row justify-between absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] p-[20px] w-4/5 h-2/6 border-2 rounded-xl text-sm'>  */}
                <div className='border-2 basis-1/6'>
                    <img src="./src/assets/images/405.png" alt="" className='w-full m-auto border-2' />
                </div>
                <div className='basis-1/2'>
                    <label className='font-bold'> Nama </label>
                    <p>Muhamad Julpan Zhafran Yahya</p>
                    <label className='font-bold'> NIM </label>
                    <p>1234567891011</p>
                    <label className='font-bold'> Keperluan </label>
                    <p>Membuat surat pembasmi iblis</p>
                </div>
                <div className='flex flex-col justify-around basis-1/6 border-2'>
                    <button className='bg-green-400 rounded-md p-1'>Selesai</button>
                    <button className='bg-red-400 rounded-md p-1'>Batalkan</button>
                </div>
            </div>
        </div>
    )
}