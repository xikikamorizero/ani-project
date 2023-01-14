import React from "react";
import style from './Paginatio.module.css'
import { useState } from "react";


const Pagination: React.FC<PageType> = ({ limit, offset, count, action, pageSize=10, currentPage}) => {

    let pagesCount = Math.ceil(count / limit);
    // console.log(pagesCount, limit, count)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        if (i == 1) {
            pages.push({ page: i, offset: 0 })
        }
        else {
            pages.push({ page: i, offset: limit * (i - 1) })
        }
    }
    // console.log(pages)
    let portionCount = Math.ceil(pagesCount / pageSize);
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * pageSize + 1;
    let rightPortionPageNumber = portionNumber * pageSize;
    return (
        <div className={style.pageContainer}>
            <div className={style.page}>
                {portionNumber > 1 &&
                    <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>}
                {pages
                    .filter(p => p.page >= leftPortionPageNumber && p.page <= rightPortionPageNumber)
                    .map((p) => {
                        return (
                            <span className={ currentPage=== p.page? style.pageNumber :  style.selectedPage} 
                            key={p.page} onClick={()=>{action(p.offset, p.page)}}>{p.page}</span>)
                    })}
                {portionCount > portionNumber &&
                    <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button>}
            </div>
        </div>
    )
}

type PageType = {
    limit: number,
    offset: number,
    count: number,
    action: (p: number, i:number) => void,
    pageSize?:number,
    currentPage:number
}

export default Pagination