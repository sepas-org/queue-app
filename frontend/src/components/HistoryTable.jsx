import React from 'react'

const HistoryTable = ({ data }) => {
    console.log(data)
    return (
        <div>
            <table width='100%' className='text-center border-collapse' >
                <thead className='sticky top-0 bg-blue-500 text-white border' >
                    <tr  >
                        <th className='border px-4 py-4' >No. Antrian</th>
                        <th className='border px-4 py-4' >Nama</th>
                        <th className='border px-4 py-4' >Nomor Induk Mahasiswa</th>
                        <th className='border px-4 py-4' >Keperluan</th>
                        <th className='border px-4 py-4' >Tanggal</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index)=>(
                        <tr key={index}>
                            <td className='border px-4 py-4' >{item.queueValue}</td>
                            <td className='border px-4 py-4' >{item.nama}</td>
                            <td className='border px-4 py-4'>{item.nim}</td>
                            <td className='border px-4 py-4'>{item.keperluan}</td>
                            <td className='border px-4 py-4'>{item.tanggal}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default HistoryTable
