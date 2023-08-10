import React from 'react'

// Submit button used in client side - START
export const Submit = () => {
    return (
        <button 
                type="submit"
                className="p-4 mt-3 mb-10 text-xl font-medium text-white bg-blue-400 rounded-md hover:bg-blue-500 active:bg-blue-700"
                
                >
                Submit
            </button>
        )
    }
// Submit button used in client side - END

// Done button used in admin side -START
export const Done = ({queue, onClick}) => {
    if(queue.length > 0){
        return(
            <>
                <button type="button" className='bg-green-400 rounded-md px-4 py-2 w-[8em]' onClick={onClick}>Selesai</button>
            </>
        )
    }else{
        return(
            <>
                <button type="button" className='bg-gray-300 rounded-md px-4 py-2 w-[8em] font-bold text-gray-400' disabled>Selesai</button>
            </>
        )
    }
}
// Done button used in admin side - END

// Next button used in admin side - START
export const Next = ({onClick}) => {
    return(
        <>
            <button type="button" className='bg-blue-400 rounded-md w-[8em] px-4 py-2 font-bold' onClick={onClick}>Selanjutnya</button>
        </>
    )
}
// Next button used in admin side - END


export const Cancel = ({queue}) => {
    if(queue.length > 0){
        return(
            <>
                <button type="button" className='bg-red-400 rounded-md px-4 py-2 w-[8em]'>Batalkan</button>
            </>
        )
    }else{
        return(
            <>
                <button type="button" className='bg-gray-300 rounded-md px-4 py-2 w-[8em] font-bold text-gray-400' disabled>Batalkan</button>
            </>
        )
    }
    
}

export const Queue = ({onClick}) =>{
    return(
        <>
            <button onClick={onClick} >Queue</button>
        </>
    )
}

export const History = ({onClick}) =>{
    return(
        <>
            <button onClick={onClick} >History</button>
        </>
    )
}