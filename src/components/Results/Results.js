import React, { useState, useEffect } from 'react'
import './Results.css'
import Videocard from './Videocard';
import axios from '../../axios';
import requests from '../../requests'

function Results() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const req = await axios.get(requests.fetchActionMovies);
            setMovies(req.data.results);
            return req;
        }

        fetchData();
    },[]);

    return (
        <div className="results">
            {movies.map(movie => (
                <Videocard 
                movie={movie}
                />
            ))}
            
        </div>
    )
}

export default Results
