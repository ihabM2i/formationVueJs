import axios from "axios"

const urlApi = "http://localhost:5000/"
export const getMessage = () => {
    return axios.get(urlApi +"test")
}