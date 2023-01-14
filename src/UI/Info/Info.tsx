import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AppStateType } from "../../BLL/redux";
import style from "./Info.module.css"
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actionAnime } from "../../BLL/anime-reducer";

const Info = ({anime1}:any) => {

    let location = useLocation();
    let anime = useSelector((state: AppStateType) => state.anime.anime)
    let animeId = useSelector((state: AppStateType) => state.anime.animeId)
    const dispatch = useDispatch()

    function refreshAnime() {
        if (location.pathname.split('/')[2] !== undefined) {
            let animeID = Number(location.pathname.split('/')[2]);
            dispatch(actionAnime.getIsAnimeId(animeID))
        }
    }

    useEffect(() => {
        if (location.pathname.split('/')[2] !== undefined) {
            refreshAnime()
        }
    }, [location.pathname])

    console.log(animeId)
    let filter = anime.filter((a: any) => a.id == animeId)

    return (
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.one}>
                    <div className={style.infoImg}>
                        <img src={filter[0].attributes.posterImage.small} />
                    </div>
                    <div className={style.info}>
                        <div className={style.title}>
                            <h1>{filter[0].attributes.titles.en}</h1>
                        </div>
                    </div>
                </div>
                <div className={style.two}>
                    <div className={style.description}>
                        <p>{filter[0].attributes.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info