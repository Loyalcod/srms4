import axios  from 'axios'
const baseURL = "http://localhost:9000"

export default axios.create({
    baseURL 
})

export const privateAxios = axios.create({
    baseURL,
    headers: {'Content-Type': 'application/json'},
    withCredentials: true 
})




