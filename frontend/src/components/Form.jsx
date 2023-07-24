import React, { useState, useEffect} from "react"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Form (){
    const [inputs, setInputs] = useState({})
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
    // useEffect(() => {
    //     // Function to send the POST request when the number state changes
    //     const sendPostRequest = async () => {
    //     try {
    //         const response = await fetch("http://localhost:3030/api/number", {
    //             method: "POST",
    //             headers: {
    //             "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({ numbers: number }),
    //         });

    //         const data = await response.json();
    //         console.log("Response from server: ", data);
    //     } catch (error) {
    //     console.error("Error: ", error);
    //     }
    //     };

    //     sendPostRequest()
    // }, [number])


    const formatQueueNumber = (number)=>{
        return number.toString().padStart(3,"0")
    }

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setInputs(values => ({...values, [name]: value}))
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        const nama = inputs.nama || ""
        const keperluan = inputs.keperluan || ""
        if(nama !== "" && keperluan !== ""){
            
            setNumber((prevNumber) => prevNumber + 1);
            axios.post("http://localhost:3030/api/number", {
                number: `${formatQueueNumber(number)}`,
                nama: inputs.nama,
                nim: inputs.nim,
                keperluan: inputs.keperluan
            })
            .then((response) => {
                console.log(response.data)
            })
            .catch((error)=>{
                console.error(error)
            })
            confirm(`Halo ${nama}, apakah keperluan kamu adalah ${keperluan}`)
            setShowTicket(true)
            
            // Set a timer to navigate to another page after 3 seconds (adjust the time as needed)
            setTimeout(() => {
                setShowTicket(false)
            }, 6000);
            
            
            // navigate('/ticket', {state: {nama}})
            
        }else{
            alert("Mohon masukan nama dan keperluan anda")
        }

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
                            value = { inputs.nama }
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
                            value = { inputs.nim }
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
                            value = { inputs.keperluan }
                            onChange={handleChange}
                            className="field focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                        />
                        <button 
                            type="submit"
                            className="p-4 mt-3 mb-10 text-xl font-medium text-white bg-blue-400 rounded-md hover:bg-blue-500 active:bg-blue-700"
                        >
                            Submit
                        </button>
                    </div>
                    
                </form>
                
            </div>
            
                <h1 className={`absolute text-3xl font-bold center ${showTicket ? '': 'hidden'}`} id="ticket">Halo {inputs.nama}, silahkan ambil nomor antrian anda</h1>
            
            
            
        </>
    )
    
}

