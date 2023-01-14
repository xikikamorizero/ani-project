import React, { useState } from "react";
import style from "./Anime.module.css"
import { AppStateType } from "../../BLL/redux";
import { useDispatch } from "react-redux";
import Item from "../Main/Item";
import { connect } from 'react-redux';
import { useEffect } from "react";
import { actionAnime, sagaGetAnime } from "../../BLL/anime-reducer";
import Pagination from "../util/Paginator";
import Preloader from "../util/Preloader/Preloader";

const Anime = (props: any) => {

    const [fill, setFill] = useState('')
    const [tex, setTex] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(sagaGetAnime(props.limit, props.offset))
    }, [props.offset])

    const action = (offset: number, page: number) => {
        dispatch(actionAnime.nextPageAnime(offset))
        dispatch(actionAnime.getCurrentPage(page))
    }
    if (props.isFetching) {
        return (
            <Preloader />
        )
    }

    return (
        <div className={style.container}>
            <Pagination limit={props.limit} offset={props.offset} count={props.count} action={action} currentPage={props.currentPage} />
            <div className={style.filter}>
                <input type='text' id='fill' onChange={(e: any) => { setFill(e.target.value) }} />
                <button onClick={() => { setTex(fill) }}>Click</button>
            </div>
            <div className={style.animeContainer}>
                <div className={style.animeBlock}>
                    {props.anime.map((a: any) => <Item art={a.attributes.posterImage.small} title={a.attributes.titles.en} desription={a.attributes.description} key={a.id} id={a.id} />)}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state: AppStateType) => ({
    anime: state.anime.anime,
    limit: state.anime.limit,
    offset: state.anime.offset,
    count: state.anime.count,
    currentPage: state.anime.currentPage,
    isFetching: state.anime.isFetching
})

export default connect(mapStateToProps, {})(Anime)