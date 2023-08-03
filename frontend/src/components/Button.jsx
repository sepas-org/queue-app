import React from 'react'

export const Submit = () => {
    
    // const handleSubmit = async (event) => {
    //     event.preventDefault()
    //     handleNavigation()
    // }

    return (
            <button 
                type="submit"
                className="p-4 mt-3 mb-10 text-xl font-medium text-white bg-blue-400 rounded-md hover:bg-blue-500 active:bg-blue-700"
                
            >
                Submit
            </button>
        )
    
}
// export const Done = () => {
//     return (
//         <button
//             type='button'
//             className='px-3 py-2 bg-green-500 rounded-lg w-1/3 font-bold text-white'
            
//         >
//             Selesai
//         </button>
//     )
// }

export const Done = ({queue}) => {
    if(queue){
        return(
            <>
                <button type="button" className='bg-green-400 rounded-md px-4 py-2 w-[8em]'>Selesai</button>
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
export const Next = ({queue}) => {
    return(
        <>
            <button type="button" className='bg-blue-400 rounded-md w-[8em] px-4 py-2 font-bold'>Selanjutnya</button>
        </>
    )
}
export const Cancel = ({queue}) => {
    if(queue){
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