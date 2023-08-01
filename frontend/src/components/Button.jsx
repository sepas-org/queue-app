import React from 'react'

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

export const Done = () => {
    return (
        <button
            type='button'
            className='px-3 py-2 bg-green-500 rounded-lg w-1/3 font-bold text-white'
            
        >
            Selesai
        </button>
    )
}
