import React from 'react'
import Aside from '../components/Aside'
import Longcard from '../components/Longcard'

export default function Admin(){
    return(
        <div className='flex h-screen flex-row'>
            <Aside />
            <Longcard />
        </div>
    )
}