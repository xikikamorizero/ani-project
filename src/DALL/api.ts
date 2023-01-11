import axios from 'axios'

export const anime = {
    getAnime(limit:number, offset:number) {
        return axios.get(`https://kitsu.io/api/edge//anime?page[limit]=${limit}&page[offset]=${offset}`).then((response) => response.data)
    },
    getAnimeCategories(limit:number, offset:number, categories: string) {
        return axios.get(`https://kitsu.io/api/edge/anime?filter[categories]=${categories}&page[limit]=${limit}&page[offset]=${offset}`)
    },
    SearchAnime(limit:number, offset:number, name: string) {
        return axios.get(`https://kitsu.io/api/edge/anime?filter[text]=${name}&page[limit]=${limit}&page[offset]=${offset}`)
    }
}

export const manga = {
    getManga(limit:number, offset:number) {
        return axios.get(`https://kitsu.io/api/edge//manga?page[limit]=${limit}&page[offset]=${offset}`).then((response) => response.data)
    },
    getMangaCategories(limit:number, offset:number, categories:string) {
        return axios.get(`https://kitsu.io/api/edge/manga?filter[categories]=${categories}&page[limit]=${limit}&page[offset]=${offset}`).then((response)=>response.data)
    },
    SearchManga(limit:number, offset:number, name: string) {
        return axios.get(`https://kitsu.io/api/edge/manga?filter[text]=${name}&page[limit]=${limit}&page[offset]=${offset}`)
    }
}
