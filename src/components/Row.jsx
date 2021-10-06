import React from 'react'
import { useState, useEffect } from 'react';
import axios from '../axios';
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseURL = "https://image.tmdb.org/t/p/original/";

function Row(props) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(props.fetchUrl);
            // console.log(request);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [ props.fetchUrl ]);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            // 
            autoplay: 1
        }
    };

    const handleClick = (movie) => {
        if(trailerUrl) {
            setTrailerUrl("");
        } else {
            movieTrailer(movie?.name || "")
            .then(url => {
                // we only want the v= in the param
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            }).catch(error => console.log(error))
        }
    };

    return (
        <div className="div__row">
            {/* title */}
            <h2>{props.title}</h2>
            {/* posts */}
            <div className="div__rowpost">
                {movies.map(movie => (
                    <img
                    key={movie.id}
                    onClick={() => handleClick(movie)}
                    className={`row__poster ${props.isLargeRow && "row__posterLarge"}`}
                    src={`${baseURL}${props.isLargeRow? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>
                ))}
            </div>
                    {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row
