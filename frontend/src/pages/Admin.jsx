import React, {useEffect, useState } from 'react'
import Aside from '../components/Aside'
import { useLocation, useNavigate } from 'react-router-dom'
import { MainQueue, HistoryQueue } from '../containers'

export function Admin(){
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    useEffect(()=>{
        if(!token){
            navigate('/login')
        }
    })
    const location = useLocation()
    const admin = location.state.admin
    const [page, setPage] = useState(true)

    const handleClickQueue = () => {
        setPage(true)
        console.log(page)
    }

    const handleClickHistory = () => {
        setPage(false)
        console.log(page)
    }

    return(
        <div className='flex h-screen flex-row'>
            <Aside onClickQueue={handleClickQueue} onClickHistory={handleClickHistory} />
            {page ? <MainQueue admin={admin}/> : <HistoryQueue />}
        </div>
    )
}