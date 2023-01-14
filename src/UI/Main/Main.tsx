import React from "react";
import style from './Main.module.css'
import { AppStateType } from "../../BLL/redux";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionManga, sagaGetSearch } from "../../BLL/manga-reducer";
import { connect } from 'react-redux';


const Main = (props: any) => {

    const dispatch = useDispatch()

    return (
        <div className={style.mainContainer}>
            <div className={style.main}>
                <NavLink to='/anime'>Anime</NavLink>
                <NavLink to='/manga'>Manga</NavLink>
                <div className={style.search}>
                    <input type='text' onChange={(e: any) => { dispatch(actionManga.getSearch(e.target.value)) }} />
                    <button onClick={() => { dispatch(sagaGetSearch(props.limit, props.offset, props.text)) }}>поиск</button>
                </div>
            </div>
            <div>
                {/* <TEST /> */}
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