import React from 'react'
import cls from './Pagination.module.scss'

export const Pagination = ({ onPageChanged, currentPage, pages }) => {
    return (
        <div className={cls.pageNumbers}>
            {pages.map(p => {
                return <div onClick={() => { onPageChanged(p) }} className={currentPage === p && cls.selectedPage} > {p}</div>
            })}
        </div>
    )
}