import React from "react";
import style from './Item.module.css'
import { useNavigate } from "react-router-dom";

const Item = ({art, title, desription,id}:any) => {
    let navigate = useNavigate()
    return (
        <div className={style.itemContainer} onClick={()=>{ navigate('/info/'+id)}}>
            <div className={style.photoContainer}>
                <img src={art} />
            </div>
            <div className={style.textContainer}>
                <div className={style.title}>{title}</div>
                <div className={style.description}>{desription}</div>
            </div>
        </div>
    )
}

export default Item