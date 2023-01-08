import { call, put, takeEvery, fork, spawn } from 'redux-saga/effects'
import { anime } from '../../DALL/api'
import { actionAnime } from '../anime-reducer'

function* RootSaga() {
    yield spawn(WatcharSaga)
}

function* WatcharSaga() {
    yield takeEvery("saga/GET_ANIME", WorkerSage)
}

function* WorkerSage({ limit, offset }: D):any {
   const anime1 = yield call(anime.getAnime, limit, offset)
   yield put(actionAnime.getAnime(anime1.data))
}

type D = {
    type: string,
    limit: number,
    offset: number
}

export default RootSaga