import { useEffect, useState } from "react"
import Header from './Header.js'
import MovieFilters from "./MovieFilters.js";
import MovieList from "./MovieList.js";
import { useLocation } from "react-router-dom"
import Favorites from "./Favorites.js";
import MovieViewer from "./MovieViewer.js";

function MovieBrowser (props) {
    const [moviesList, setOriginalMoviesList] = useState(props.moviesList);
    const [moviesListCopy, setCopyList] = useState(props.moviesList)
    const [favoriteList, setFavorites] = useState([])
    const [selectedMovie, setSelected] = useState({})
    const [viewingSingleMovie, setSingleMovieView] = useState(false)
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
            <Header setIsBrowse={props.setIsBrowse} ></Header>
            {viewingSingleMovie ? <MovieViewer favoriteMovies={favoriteList} selectedMovie={selectedMovie} addToFav={addToFav} setSingleMovieView={setSingleMovieView}></MovieViewer> :
            <div className="flex gap-5 space-between">

                <MovieFilters genres={genreList} setCopyList={setCopyList} moviesList={moviesListCopy} originalMoviesList={moviesList} ></MovieFilters>
                <MovieList moviesList={moviesListCopy} addToFav={addToFav} searchedTitle={props.searchedTitle} setCopyList={setCopyList} setSelected={setSelected} setSingleMovieView={setSingleMovieView}></MovieList>
                <Favorites favoriteMovies={favoriteList}></Favorites>
            </div>
            }
        </main>
    )
}
export default MovieBrowser