import { animeReducer } from './anime-reducer';
import { applyMiddleware, combineReducers, createStore, compose} from "redux";
import createSagaMiddleware from 'redux-saga';
import RootSaga from "./saga/saga";


let Rootreducer = combineReducers({
  anime:animeReducer
});

export const sagaMiddleware = createSagaMiddleware()

type RootReducerType = typeof Rootreducer;

export type AppStateType = ReturnType<RootReducerType>

export type InferActionTypes<T> = T extends {[key:string]:(...args:any[])=>infer U} ? U : never

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(Rootreducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(RootSaga)

export default store;