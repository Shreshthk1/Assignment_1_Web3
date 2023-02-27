import { useEffect, useState } from "react"
import Header from './Header.js'
import MovieFilters from "./MovieFilters.js";
import MovieList from "./MovieList.js";
import { useLocation } from "react-router-dom"
import Favorites from "./Favorites.js";

function MovieBrowser (props) {
    const [moviesList, setOriginalMoviesList] = useState(props.moviesList);
    const [moviesListCopy, setCopyList] = useState(props.moviesList)
    const [favoriteList, setFavorites] = useState([])

    const genreList = []
        moviesList.map(movie => {
        movie.details.genres.map(genre => {
            if(!genreList.includes(genre.name)) {
                genreList.push(genre.name)
            }
        })
    }); 

    const addToFav = (movie) => {
        let temp = favoriteList.filter(film => film.id === movie[0].id)
        if(temp.length != 0){
            let movieIndex = favoriteList.findIndex(film => film.id === movie[0].id)
            favoriteList.splice(movieIndex,1);
            setFavorites([...favoriteList]);
        } else {
            favoriteList.push(movie[0]);
            setFavorites([...favoriteList]);
        }
    }

    return(
        <main className = "w-screen h-screen overflow-hidden"style={{backgroundImage: `url("/MoviesList-Background.jpg")`}}>
            <Header></Header>
            <div className="flex gap-5 space-between">
                <MovieFilters genres={genreList} setMoviesList={setCopyList} moviesList={moviesListCopy} originalMoviesList={moviesList}></MovieFilters>
                <MovieList moviesList={moviesListCopy} addToFav={addToFav}></MovieList>
                <Favorites favoriteMovies={favoriteList}></Favorites>
            </div>
        </main>
    )
}
export default MovieBrowser