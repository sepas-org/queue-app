import React, {useState } from 'react'
import Aside from '../components/Aside'

import { MainQueue, HistoryQueue } from '../containers'

export function Admin(){
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
            {page ? <MainQueue /> : <HistoryQueue />}
        </div>
    )
}