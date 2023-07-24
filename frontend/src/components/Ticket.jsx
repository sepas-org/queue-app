import React, {useEffect} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Ticket(){
    const location = useLocation()
    const navigate = useNavigate()
    const nama = location.state.nama

    useEffect(() => {
        // Set a timer to navigate to another page after 3 seconds (adjust the time as needed)
        const timer = setTimeout(() => {
          navigate('/');
        }, 6000);
    
        // Clean up the timer when the component is unmounted
        return () => clearTimeout(timer);
      }, [navigate]);

    return(
        <>
            <h1 className='center font-bold text-3xl absolute'>Halo {nama}, silahkan ambil nomor antrian anda</h1>
        </>
    )
}