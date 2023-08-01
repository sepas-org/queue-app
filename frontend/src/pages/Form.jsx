import React, { useState, useEffect} from "react"
import { Submit } from "../components/Button"
import { dataPostClient } from "../utils/api"

export default function Form (){
    const [inputs, setInputs] = useState({
        nama: '',
        nim: '',
        keperluan: ''
    })
    const [number, setNumber] = useState(()=>{
        // Get the initial number value from localStorage if it exists, otherwise default to 1
        const storedNumber = sessionStorage.getItem("number");
        return storedNumber ? parseInt(storedNumber) : 1;
    })
    const [showTicket, setShowTicket] = useState(false)

    useEffect(() => {
        // Save the current number value to localStorage whenever it changes
        sessionStorage.setItem("number", number);
    }, [number]);
    


    const formatQueueNumber = (number)=>{
        return number.toString().padStart(3,"0")
    }

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setInputs(values => ({...values, [name]: value}))
    }
    
    let nama, keperluan, nim = ""

    const handleSubmit = async (event) => {
        event.preventDefault()
        
        
        if(!isNaN(inputs.nim)){
            nim = inputs.nim
        }else{
            return alert('Invalid input. Please enter a valid number.')
        }

        if( nama !== "" ){
            nama = inputs.nama
        }else{
            return alert('Invalid input. Please enter nama')
        }

        if( keperluan !== ""){
            keperluan = inputs.keperluan
        }else{
            return alert('Invalid input. Please enter keperluan')
        }
        
        const data = {
            nama: nama,
            nim: nim,
            keperluan: keperluan
        }
        
            
        setNumber((prevNumber) => prevNumber + 1);
        await dataPostClient(data)
        confirm(`Halo ${nama}, apakah keperluan kamu adalah ${keperluan}`)
        setShowTicket(true)
        
        // Set a timer to navigate to another page after 3 seconds (adjust the time as needed)
        setTimeout(() => {
            setShowTicket(false)
            inputs.nama = ""
            inputs.nim = ""
            inputs.keperluan = ""
        }, 6000);
            
            
            // navigate('/ticket', {state: {nama}})
        
    }

    return(
        <>
            <div className={`absolute w-2/5 shadow-lg center divForm rounded-2xl h-max ${showTicket ? 'hidden': ''}`} id="divForm">
                <h2  className="pt-12 mx-auto text-3xl font-semibold w-max pb-11"></h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid w-3/4 grid-cols-1 m-auto ">
                        <label 
                            htmlFor="nama"
                            className="mb-2 text-lg"
                        >
                            Nama
                        </label>
                        <input 
                            type="text"
                            name="nama"
                            id="nama"
                            placeholder="Isi nama kamu"
                            value={inputs.nama}
                            onChange={handleChange}
                            className="h-10 field focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                        />
                        <label 
                            htmlFor="nim"
                            className="mb-2 text-lg"
                        >
                            Nim
                        </label>
                        <input 
                            type="text"
                            name="nim"
                            id="nim"
                            placeholder="Isi nim"
                            value={inputs.nim}
                            onChange={handleChange}
                            className="h-10 field focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                        />
                        <label 
                            htmlFor="keperluan"
                            className="mb-2 text-lg"
                        >
                            Keperluan
                        </label>
                        <textarea
                            name="keperluan"
                            id="keperluan"
                            placeholder="Isi dengan keperluan yang kamu inginkan"
                            value={inputs.keperluan}
                            onChange={handleChange}
                            className="field focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                        />
                        <Submit />
                    </div>
                    
                </form>
                
            </div>
            
                <h1 className={`absolute text-3xl font-bold center ${showTicket ? '': 'hidden'}`} id="ticket">Halo {inputs.nama}, silahkan ambil nomor antrian anda</h1>
            
            
            
        </>
    )
    
}

