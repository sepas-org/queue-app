import React from 'react'

const HistoryTable = ({ data }) => {
    console.log(data)
    return (
        <div>
            <table width='100%' className='text-center border-collapse border border-blue-500' >
                <thead>
                    <tr>
                        <th>No. Antrian</th>
                        <th>Nama</th>
                        <th>Nomor Induk Mahasiswa</th>
                        <th>Keperluan</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index)=>(
                        <tr key={index}>
                            <td>{item.queue}</td>
                            <td>{item.nama}</td>
                            <td>{item.nim}</td>
                            <td>{item.keperluan}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default HistoryTable
