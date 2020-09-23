import React from 'react'
import './Videocard.css'

function Videocard({movie}) {
    const img_base_url = "https://image.tmdb.org/t/p/original/";
    return (
        <div className="vid-card">
            <img src={
                `${img_base_url}${movie.backdrop_path}`
            } alt="" />
            <p></p>
            <h2></h2>
            <p></p>
        </div>
    )
}

export default Videocard
