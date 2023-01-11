import { call, put, takeEvery, fork, spawn } from 'redux-saga/effects'
import { anime } from '../../DALL/api'
import { actionAnime } from '../anime-reducer'
import { manga } from '../../DALL/api'
import { actionManga } from '../manga-reducer'
import { GetManga, GetSearch, Next } from './sagaM'

function* RootSaga() {
    yield spawn(WatcharSaga)
}

function* WatcharSaga() {
    yield takeEvery("saga/GET_ANIME", GetAnime)
    yield takeEvery("saga/GET_MANGA", GetManga)
    yield takeEvery("saga/GET_SEARCH", GetSearch)
    yield takeEvery("saga/NEXT", Next)
}

function* GetAnime({ limit, offset }: D):any {
    try{
   const response = yield call(anime.getAnime, limit, offset)
   yield put(actionAnime.getAnime(response.data))
   yield put(actionAnime.getCount(response.meta.count))
    }catch(e){
        console.log(e,'Error anime Saga')
    }
}

type D = {
    type: string,
    limit: number,
    offset: number
}

export default RootSaga