import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3030/api',
})

export const dataPostLogin = async (data) => {
    try{
        const response = await api.post("/auth/login", data)
        const token = response.data.token
        localStorage.setItem('token', token)
        return response.data
    }catch(e){
        console.error(e)
        throw e
    }
}

api.interceptors.request.use((config)=>{
    const token = localStorage.getItem('token');
    if(token){
        config.headers.authorization = `Bearer ${token}`; 
    }
    return config;
})


export const dataPostClient = async (data) => {
    try{
        const response = await api.post("/queue/add", data);
        return response.data;
    }catch(e){
        console.error(e);
        console.log(e);
    }
}


export const getDataNextQueue = async () => {
    try{
        const response = await api.get('/queue/next')
        console.log(response.data)
        return response.data;
    }catch(e){
        console.error(e);
        console.log(e);
    }
}

export const getDataHistory = async () => {
    try{
        const response = await api.get("/display/history")
        console.log(response.data.data);
        return response.data.data;
    }catch(e){
        console.log(e);
        console.error(e);
    }
}

export const postDataQueueDone = async (queueValue) => {
    try{
        const results = await api.post('/queue/done')
        return results
    }catch(e){
        console.log(e);
        console.error(e);
    }
}

export const getQueueDisplay = async (admin) => {
    try{
        const results = await api.get('/display/dashboard');
        const resultData = results.data.queueTemp;
        const result = resultData.filter(queue=> queue.admin == `${admin}`);
        console.log(results.data)
        return result
    }catch(e){
        console.log(e)
        console.error(e)
    }
}

// export const getDataQueue = async () => {
//     try{
//         const result = await axios.get("")
//         return result = 
//     }
// }
