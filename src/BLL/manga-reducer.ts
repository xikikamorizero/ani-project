import { manga } from './../DALL/api';
import { useSelector } from 'react-redux';
import { InferActionTypes } from "./redux";
import { AppStateType } from './redux';

let initialState = {
    manga: [] as any,
    mangaCateg: [] as any,
    limit: 12,
    offset: 0,
    categries: ' ',
    count: 0,
    currentPage: 1,
    isFetching: true
}

type InitialStateType = typeof initialState

const mangaReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case "GET_MANGA":
            return {
                ...state,
                manga: action.manga
            }
        case "GET_SEARCH_MANGA":
            return {
                ...state,
                categries: state.categries + action.text
            }
        case "NEXT_PAGE_MANGA":
            return {
                ...state,
                offset: action.offset
            }
        case "GET_COUNT_MANGA":
            return {
                ...state,
                count: action.count
            }
        case "GET_CURRENT_PAGE_MANGA":
            return {
                ...state,
                currentPage: action.currentPage
            }
        case "GET_IS_FETCHING_MANGA":
            return {
                ...state,
                isFetching:action.isFetching
            }
        default: return state
    }
}

export const actionManga = {
    getManga: (manga: any) => ({
        type: "GET_MANGA",
        manga
    } as const),
    getSearch: (text: string) => ({
        type: "GET_SEARCH_MANGA",
        text
    } as const),
    nextPageManga: (offset: number) => ({
        type: "NEXT_PAGE_MANGA",
        offset
    } as const),
    getCount: (count: number) => ({
        type: "GET_COUNT_MANGA",
        count
    } as const),
    getCurrentPage: (currentPage: number) => ({
        type: "GET_CURRENT_PAGE_MANGA",
        currentPage
    } as const),
    getFetching: (isFetching: boolean) => ({
        type: "GET_IS_FETCHING_MANGA",
        isFetching
    } as const)
}

export const sagaGetManga = (limit: number, offset: number) => {
    return {
        type: "saga/GET_MANGA",
        limit,
        offset
    }
}

export const sagaGetSearch = (limit: number, offset: number, categories: string) => {
    return {
        type: "saga/GET_SEARCH_MANGA",
        limit,
        offset,
        categories
    }
}

export default mangaReducer