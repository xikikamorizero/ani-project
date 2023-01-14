import { InferActionTypes } from "./redux";

let initalState = {
    anime: [] as any,
    limit: 12,
    offset: 0,
    categories: ' ',
    count: 0,
    currentPage: 1,
    isFetching: true,
    animeId: 1
}

type InitialStateType = typeof initalState

const animeReducer = (state = initalState, action: ActionAnimeType): InitialStateType => {
    switch (action.type) {
        case 'GET_ANIME':
            return {
                ...state,
                anime: action.anime
            }
        case "GET_SEARCH_ANIME":
            return {
                ...state,
                categories: state.categories + action.text
            }
        case "NEXT_PAGE_ANIME":
            return {
                ...state,
                offset: action.offset
            }
        case 'GET_COUNT_ANIME':
            return {
                ...state,
                count: action.count
            }
        case "GET_CURRENT_PAGE_ANIME":
            return {
                ...state,
                currentPage: action.currentPage
            }
        case "GET_IS_FETCHING_ANIME":
            return {
                ...state,
                isFetching: action.isFetching
            }
        case "GET_IS_FETCHING_ANIME_ID":
            return {
                ...state,
                animeId: action.id
            }
        default:
            return state
    }
}

export const actionAnime = {
    getAnime: (anime: any) => ({
        type: 'GET_ANIME',
        anime
    } as const),
    getCount: (count: number) => ({
        type: "GET_COUNT_ANIME",
        count
    } as const),
    getSearch: (text: string) => ({
        type: "GET_SEARCH_ANIME",
        text
    } as const),
    nextPageAnime: (offset: number) => ({
        type: "NEXT_PAGE_ANIME",
        offset
    } as const),
    getCurrentPage: (currentPage: number) => ({
        type: "GET_CURRENT_PAGE_ANIME",
        currentPage
    } as const),
    getIsFetching: (isFetching: boolean) => ({
        type: "GET_IS_FETCHING_ANIME",
        isFetching
    } as const),
    getIsAnimeId: (id: number) => ({
        type: "GET_IS_FETCHING_ANIME_ID",
        id
    } as const)
}

export const sagaGetAnime = (limit: number, offset: number) => {
    return {
        type: "saga/GET_ANIME",
        limit,
        offset
    }
}

type ActionAnimeType = InferActionTypes<typeof actionAnime>

export default animeReducer