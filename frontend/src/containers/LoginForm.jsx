import React, { useState } from 'react';
import { Submit } from '../components/Button';
import { dataPostLogin } from '../utils/api';
import { useNavigate } from 'react-router-dom';
import { MainQueue } from './MainQueue';

// export const jwtToken = (response) => {
//     return response.data.token
// }

export const LoginForm = () =>{
    const navigate = useNavigate()
    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    })
    

    const handleChange = (event) => {
        event.preventDefault()
        const name = event.target.name
        const value = event.target.value
        setInputs(values => ({...values, [name]: value}))
    }

    
    const data = {
        username: inputs.username,
        password: inputs.password
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            if(inputs.username === ""){
                return alert('Invalid input. Please enter a valid username')
            }
            if(inputs.password === ""){
                return alert('Invalid input. Please enter a valid password')
            }

            const response = await dataPostLogin(data)
            
            console.log(response)
            // if(result.status === true){
            //     navigate('/admin')
            // }
            if(response && response.status === true){
                navigate('/admin', {state: { counter: inputs.username }})
            }
        }catch(e){
            console.error(e)
            throw e
        }
    }

    return (
        <div className='absolute w-2/5 shadow-lg center divForm rounded-2xl h-max'>
            <p className='text-[24px] mx-auto w-max p-5'>Admin Login</p>
            <form onSubmit={handleSubmit}>
                <div className='grid w-3/4 grid-cols-1 m-auto'>
                    <label 
                        htmlFor="nama"
                        className="mb-2 text-lg"
                    >
                        Username
                    </label>
                    <input 
                        type="text"
                        name="username"
                        id="nama"
                        placeholder="Enter your username"
                        value={inputs.username}
                        onChange={handleChange}
                        className="h-10 field focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                    />
                    <label 
                        htmlFor="nim"
                        className="mb-2 text-lg"
                    >
                        Password
                    </label>
                    <input 
                        type="password"
                        name="password"
                        id="nim"
                        placeholder="Enter your passwod"
                        value={inputs.password}
                        onChange={handleChange}
                        className="h-10 field focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                    />
                    <Submit />
                </div>
            </form>
            <div className='hidden'>
                <MainQueue counter={data.username}/>
            </div>
        </div>
    )
}