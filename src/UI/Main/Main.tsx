import React from "react";
import style from './Main.module.css'
import { AppStateType } from "../../BLL/redux";
import Item from "./Item";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionManga, sagaGetSearch } from "../../BLL/manga-reducer";
import { connect } from 'react-redux';


const Main = (props: any) => {
    const dispatch = useDispatch()
    // const text = useSelector((state: AppStateType) => { return state.manga.categries })
    // const offset = useSelector((state: AppStateType) => { return state.manga.offset })
    return (
        <div className={style.mainContainer}>
            <div className={style.main}>
                <NavLink to='/anime'>Anime</NavLink>
                <NavLink to='/manga'>Manga</NavLink>
                <div className={style.search}>
                    <input type='text' id='search' onChange={(e: any) => { dispatch(actionManga.getSearch(e.nativeEvent.data)) }} />
                    <button onClick={() => { dispatch(sagaGetSearch(props.limit, props.offset, props.text)) }}>поиск</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state: AppStateType) => ({
    limit: state.manga.limit,
    offset: state.manga.offset,
    text: state.manga.categries
})

export default connect(mapStateToProps, {})(Main) 