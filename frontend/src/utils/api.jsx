import axios from "axios";

export const dataPostClient = async (data) => {
    axios.post("http://localhost:3030/api/queue/add", data)
    .then((response) => {
        console.log(response.data)
    })
    .catch((error)=>{
        console.error(error)
    })
}

export const dataPostLogin = async (data) => {
    try{
        const response = await axios.post("http://localhost:3030/api/auth/login", data)
        return response.data
    }catch(e){
        console.error(e)
        throw e
    }
}

// export const getDataQueue = async () => {
//     try{
//         const result = await axios.get("")
//         return result = 
//     }
// }
