import axios from 'axios'


export const anime = {
    getAnime(limit = 10, offset = 0) {
        return axios.get(`https://kitsu.io/api/edge//anime?page[limit]=${limit}&page[offset]=${offset}`).then((response) => response.data)
    },
    getAnimeCategories(limit = 10, offset = 0, categories: string) {
        return axios.get(`https://kitsu.io/api/edge/anime?filter[categories]=${categories}&page[limit]=${limit}&page[offset]=${offset}`)
    },
    SearchAnime(limit = 10, offset = 0, name: string) {
        return axios.get(`https://kitsu.io/api/edge/anime?filter[text]=${name}&page[limit]=${limit}&page[offset]=${offset}`)
    }
}

export const manga = {
    getManga(limit = 10, offset = 0) {
        return axios.get(`https://kitsu.io/api/edge//manga?page[limit]=${limit}&page[offset]=${offset}`).then((response) => response.data)
    },
    getMangaCategories(limit = 10, offset = 0, categories: string) {
        return axios.get(`https://kitsu.io/api/edge/manga?filter[categories]=${categories}&page[limit]=${limit}&page[offset]=${offset}`)
    },
    SearchManga(limit = 10, offset = 0, name: string) {
        return axios.get(`https://kitsu.io/api/edge/manga?filter[text]=${name}&page[limit]=${limit}&page[offset]=${offset}`)
    }
}
