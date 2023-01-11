import React from "react";
import style from "./Anime.module.css"
import { AppStateType } from "../../BLL/redux";
import { useDispatch } from "react-redux";
import Item from "../Main/Item";
import { connect } from 'react-redux';
import { useEffect } from "react";
import { sagaGetAnime } from "../../BLL/anime-reducer";

const Anime = (props: any) => {
  
    useEffect(() => {
        dispatch(sagaGetAnime(props.limit, props.offset))
    }, [])

    const dispatch = useDispatch()

    return (
        <div className={style.animeContainer}>
            <div className={style.animeBlock}>
                {props.anime.map((a: any) => <Item art={a.attributes.posterImage.original} title={a.attributes.titles.en} desription={a.attributes.description} key={a.id} />)}
            </div>
        </div>
    )
}

const mapStateToProps = (state: AppStateType) => ({
    anime: state.anime.anime,
    limit: state.anime.limit,
    offset: state.anime.offset,
    count: state.anime.count
})

export default connect(mapStateToProps, {})(Anime)