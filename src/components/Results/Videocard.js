import React from 'react'
import './Videocard.css'

function Videocard({img, description, title, likes}) {
    return (
        <div className="vid-card">
            <img src={img} alt="" />
            <p>{description}</p>
            <h2>{title}</h2>
            <p>{likes}</p>
        </div>
    )
}

export default Videocard
