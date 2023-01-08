import React from "react";
import style from './Item.module.css'


const Item = ({art, title, desription}:any) => {
    return (
        <div className={style.itemContainer}>
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