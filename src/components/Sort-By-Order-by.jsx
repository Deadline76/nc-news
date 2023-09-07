import { useEffect, useState } from "react"


export const SortByOrderBy = ({setSortBy, setOrderBy}) => {


    const handleSortBy = (event) => {
        setSortBy(event.target.value)
    }

    const handleOrderBy = (event) => {
        setOrderBy(event.target.value)
    }

    return (
        <div className="dropdown-container">
            <select onChange={handleSortBy} className="dropdown">
                <option value='created_at'>Date</option>
                <option value='comment_count'>Comments</option>
                <option value='votes'>Likes</option>
            </select>
            <select onChange={handleOrderBy} className="dropdown">
                <option value='asc'>Ascending</option>
                <option value='desc'>Descending</option>
            </select>
        </div>
    )
}