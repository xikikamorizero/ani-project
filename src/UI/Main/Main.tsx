import React from "react";
import style from './Main.module.css'
import { useSelector } from "react-redux";
import { AppStateType } from "../../BLL/redux";
import Item from "./Item";


const Main = ({ art, title, desription }: any) => {
    const anime = useSelector((state: AppStateType) => { return state.anime.anime })

    return (
        <div className={style.mainContainer}>
            <div className={style.main}>
                {anime.map((a: any) => <Item art={a.attributes.posterImage.original} title={a.attributes.titles.en} desription={a.attributes.description} />)}
            </div>
        </div>
    )
}


export default Main