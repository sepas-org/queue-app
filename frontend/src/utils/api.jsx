import axios from "axios";

export const dataPostClient = async (data) => {
    try{
        const response = await axios.post("http://localhost:3030/api/queue/add", data);
        return response.data;
    }catch(e){
        console.error(e);
        console.log(e);
    }
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

export const getDataNextQueue = async () => {
    try{
        const response = await axios.get("http://localhost:3030/api/queue/next");
        console.log(response)
        return response.data;
    }catch(e){
        console.error(e);
        console.log(e);
    }
}

export const getDataHistory = async () => {
    try{
        const response = await axios.get("http:localhost:3030/api/display/history")
        console.log(response.data);
        return response.data;
    }catch(e){
        console.log(e);
        console.error(e);
    }
}

// export const getDataQueue = async () => {
//     try{
//         const result = await axios.get("")
//         return result = 
//     }
// }
