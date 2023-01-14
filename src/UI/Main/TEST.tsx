import React, { useState } from "react";
import style from './Main.module.css'
import Item from "./Item";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from 'axios'


const TEST = (props: any) => {

    const [anime, setAnime] = useState([] as Array<any>)
    const [currentPage, setCurrentPage] = useState(0)
    const [fetching, setFetching] = useState(true)
    const [totalCount, setTotalCount] = useState(0)

    useEffect(() => {
        if (fetching) {
            axios.get(`https://kitsu.io/api/edge//anime?page[limit]=12&page[offset]=${currentPage}`)
                .then(response => {
                    console.log(response.data)
                    setAnime([...anime, ...response.data.data])
                    setCurrentPage((prevState) => prevState + 12)
                    setTotalCount(response.data.meta.count)
                })
                .finally(() => { setFetching(false) })
        }
    }, [fetching])

    useEffect(() => {
        document.addEventListener('scroll', scrolHandler)
    }, [totalCount])

    const scrolHandler = (e: any) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            setFetching(true)
        }
    }

    const dispatch = useDispatch()

    return (
        <div className={style.mainContainer}>
            <div className={style.animeContainer}>
                <div className={style.animeBlock}>
                    {anime.map((a: any) => <Item art={a.attributes.posterImage.small} title={a.attributes.titles.en} desription={a.attributes.description} key={a.id} id={a.id} />)}
                </div>
            </div>
        </div>
    )
}

export default TEST 