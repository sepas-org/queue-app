import React from 'react'
import Aside from '../components/Aside'

import { MainQueue } from '../components/container/MainQueue'

export default function Admin(){
    return(
        <div className='flex h-screen flex-row'>
            <Aside />
            <MainQueue />
        </div>
    )
}