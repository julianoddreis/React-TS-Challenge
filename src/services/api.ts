import axios from 'axios'

const API_URL = 'https://api.themoviedb.org/3/'

const defaultOptions = {
  baseURL: API_URL
}

const instance = axios.create(defaultOptions)

instance.interceptors.request.use((config) => ({
  ...config,
  params: {
    api_key: process.env.API_KEY
  }
}))

export default instance
