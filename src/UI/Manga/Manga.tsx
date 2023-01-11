import React from "react";
import style from "./Manga.module.css"
import { AppStateType } from "../../BLL/redux";
import { useSelector } from "react-redux";
import Item from "../Main/Item";
import { useDispatch } from "react-redux";
import { actionManga } from "../../BLL/manga-reducer";
import { connect } from 'react-redux'
import { useEffect } from "react";
import { sagaGetManga } from "../../BLL/manga-reducer";
import Pagination from "../util/Paginator";

const Manga = (props: any) => {

    useEffect(() => {
        dispatch(sagaGetManga(props.limit, props.offset))
    }, [props.offset])

    const dispatch = useDispatch()

    let i = [0, 12, 24, 48]

    const action = (offset:number, page:number) => {
        dispatch({ type: "saga/NEXT", offset: offset })
        dispatch(actionManga.getCurrentPage(page))
    }

    return (
        <div className={style.container}>
            <div className={style.menu}>
                <button>Prev</button>
                <button onClick={() => { dispatch({ type: "saga/NEXT", offset: 12 }) }}>Next</button>
            </div>
            <Pagination limit={props.limit} offset={props.offset} count={props.count} action={action} currentPage={props.currentPage} />
            {i.map((p) => <span onClick={() => {dispatch({ type: "saga/NEXT", offset: p }) }} key={p}>{p}</span>)}
            <div className={style.mangaContainer}>
                <div className={style.mangaBlock}>
                    {props.manga.map((a: any) => <Item art={a.attributes.posterImage.original} title={a.attributes.titles.en} desription={a.attributes.description} key={a.id} />)}
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = (state: AppStateType) => ({
    manga: state.manga.manga,
    limit: state.manga.limit,
    offset: state.manga.offset,
    count: state.manga.count,
    currentPage: state.manga.currentPage
})

export default connect(mapStateToProps, {})(Manga)