import axios from "axios"

const getApi = axios.create({
    baseURL : 'https://rickandmortyapi.com/api/character'
})

export default getApi