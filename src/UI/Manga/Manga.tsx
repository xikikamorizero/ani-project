import React from "react";
import style from "./Manga.module.css"
import { AppStateType } from "../../BLL/redux";
import Item from "../Main/Item";
import { useDispatch } from "react-redux";
import { actionManga } from "../../BLL/manga-reducer";
import { connect } from 'react-redux'
import { useEffect } from "react";
import { sagaGetManga } from "../../BLL/manga-reducer";
import Pagination from "../util/Paginator";
import Preloader from "../util/Preloader/Preloader";

const Manga = (props: any) => {

    useEffect(() => {
        dispatch(sagaGetManga(props.limit, props.offset))
    }, [props.offset])

    const dispatch = useDispatch()

    const action = (offset: number, page: number) => {
        dispatch({ type: "saga/NEXT", offset: offset })
        dispatch(actionManga.getCurrentPage(page))
    }

    if (props.isFetching) {
        return (
            <Preloader />
        )
    }
    return (
        <div className={style.container}>
            <Pagination limit={props.limit} offset={props.offset} count={props.count} action={action} currentPage={props.currentPage} />
            <div className={style.mangaContainer}>
                <div className={style.mangaBlock}>
                    {props.manga.map((a: any) => <Item art={a.attributes.posterImage.small} title={a.attributes.titles.en} desription={a.attributes.description} key={a.id} id={a.id} />)}
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
    currentPage: state.manga.currentPage,
    isFetching: state.manga.isFetching
})

export default connect(mapStateToProps, {})(Manga)