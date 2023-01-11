import { InferActionTypes } from "./redux";

let initalState = {
    anime: [] as any,
    limit: 12,
    offset: 0,
    categories: ' ',
    count: 0
}

type InitialStateType = typeof initalState

const animeReducer = (state = initalState, action: ActionAnimeType): InitialStateType => {
    switch (action.type) {
        case 'GET_ANIME':
            return {
                ...state,
                anime: action.anime
            }
        case 'GET_COUNT_ANIME':
            return {
                ...state,
                count: action.count
            }
        default:
            return state
    }
}

export const actionAnime = {
    getAnime: (anime: any) => ({
        type: 'GET_ANIME',
        anime
    }as const),
    getCount: (count: number) => ({
        type: "GET_COUNT_ANIME",
        count
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