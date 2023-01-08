import { anime } from './../DALL/api';
import { InferActionTypes } from "./redux";

let initalState = {
    anime: [] as any,
    limit: 10,
    offset: 0
}

type InitialStateType = typeof initalState

export const animeReducer = (state = initalState, action: any): InitialStateType => {
    switch (action.type) {
        case 'GET_ANIME':
            return {
                ...state,
                anime: action.anime
            }
        default:
            return state
    }
}

export const actionAnime = {
    getAnime: (anime:any) => ({
        type: 'GET_ANIME',
        anime
    })
}

export const sagaGetAnime=(limit:number, offset:number)=>{
    return{
        type:"saga/GET_ANIME",
        limit,
        offset
    }
}

