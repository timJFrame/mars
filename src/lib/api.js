import axios from 'axios'
const key = process.env.REACT_APP_MY_API_KEY


const date = new Date()
const month = date.getMonth() + 1
const year = date.getFullYear()
let day = date.getDate() - 2


export function getLatestPhotos(){
    return axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${year}-${month}-${day}&api_key=${key}`)
}