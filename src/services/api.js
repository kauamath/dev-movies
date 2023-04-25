import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'dfa5c351de185258cbe0bf400eaf517f',
    language: 'pt-BR',
    page: 1
  }
})

export default api
