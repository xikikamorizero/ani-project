import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://kitsu.io/api/edge'
})

export const anime = {
    getAnime(limit=10, offset=1){
        return axios.get(`https://kitsu.io/api/edge//anime?page[limit]=${limit}&page[offset]=${offset}`).then((response)=>response.data)
    }
}