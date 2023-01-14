import { useSelector } from 'react-redux';
import { call, put, takeEvery, fork, spawn } from 'redux-saga/effects'
import { manga } from '../../DALL/api'
import { actionManga } from '../manga-reducer'



export function* GetManga({ limit, offset }: M1): any {
    try {
        const response = yield call(manga.getManga, limit, offset)
        yield put(actionManga.getManga(response.data))
        yield put(actionManga.getCount(response.meta.count))
        yield put(actionManga.getFetching(false))
    } catch (e) {
        console.log(e, 'Error manga Saga')
    }
}
export function* GetSearch({ limit, offset, categories }: M2): any {
    try {
        const response = yield call(manga.getMangaCategories, limit, offset, categories)
        console.log(response.data)
        yield put(actionManga.getManga(response.data))
        yield put(actionManga.getCount(response.meta.count))
    } catch (e) {
        console.log(e, "Error saga Search")
    }
}
export function* Next(action:any) {
    try {
        yield put(actionManga.nextPageManga(action.offset))
        console.log("TYT")
    } catch (e) {
        console.log(e)
    }
}


type M1 = {
    type: string,
    limit: number,
    offset: number
}
type M2 = {
    type: string,
    limit: number,
    offset: number,
    categories: string
}