import axios from "axios";

const apiRequest = axios.create({
    baseURL: 'http://localhost:3001',
    headers: { Auth: "Simple AUTH" },
    timeout: 3000
})

export default apiRequest