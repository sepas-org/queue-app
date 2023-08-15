import React, {useState } from 'react'
import Aside from '../components/Aside'
import { useLocation } from 'react-router-dom'

import { MainQueue, HistoryQueue } from '../containers'

export function Admin(){
    const location = useLocation()
    const {counter} = location.state || {}
    const [page, setPage] = useState(true)

    const handleClickQueue = () => {
        setPage(true)
        console.log(page)
    }

    const handleClickHistory = () => {
        setPage(false)
        console.log(page)
    }

    // useEffect(()=>{
    //     console.log(page)
    // }, [page])

    return(
        <div className='flex h-screen flex-row'>
            <Aside onClickQueue={handleClickQueue} onClickHistory={handleClickHistory} />
            {page ? <MainQueue counter={counter}/> : <HistoryQueue />}
        </div>
    )
}