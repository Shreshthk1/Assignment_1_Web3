import Favorites from "./Favorites"
import Ratings from "./Ratings"
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";

function MovieViewer (props) {

    const [showModal, setShowModal] = useState(false);

    const handleShow = () => {
        setShowModal(true)
    }
    
    const handleClose = () => {
        setShowModal(false)
    }

    return(
        <main className="w-screen h-screen flex justify-evenly ">
            {/* style={{backgroundImage: `url("https://image.tmdb.org/t/p/original/${props.selectedMovie.backdrop}")`}} */}
            <div className="w-4/6 h-5/6 bg-white bg-opacity-30 rounded-xl flex text-white ">
                <div id="poster" className="pt-10 pl-10 w-2/6 h-full  ">
                    <p className="text-white text-3xl mb-5">{props.selectedMovie.title}</p>
                    <img className="rounded-xl cursor-pointer" onError="https://via.placeholder.com/342" src={"https://image.tmdb.org/t/p/w342/" + props.selectedMovie.poster} onClick={handleShow}></img>
                </div>
                <div className="flex w-4/6 justify-between flex-wrap p-10">
                    <table className="w-2/3 h-20 text-black bg-white rounded-lg">
                        <tr className=""><td className="w-1/6">Release Date</td><td>{props.selectedMovie.release_date}</td></tr>
                        <tr className=""><td>Runtime</td><td>{props.selectedMovie.runtime}</td></tr>
                        <tr className="hover:text-blue-300"><td><a href={`https://www.imdb.com/title/${props.selectedMovie.imdb_id}`}>IMDB Link</a></td></tr>
                        <tr className="hover:text-blue-300"><td><a href={`https://www.themoviedb.org/movie/${props.selectedMovie.tmdb_id}`}>TMDB Link</a></td></tr>
                        <tr className=""><td>Tagline</td><td>{props.selectedMovie.tagline}</td></tr>
                        <tr className=""><td>Overview</td><td>{props.selectedMovie.details.overview}</td></tr>
                        <tr ><td>Genres</td><td>{props.selectedMovie.details.genres.map(genre => <li>{genre.name}</li>)}</td></tr>
                    </table>
                    
                    <div className="buttons w-1/3 h-10 flex justify-center">
                        <div className="w-1/6 cursor-pointer" onClick={() => props.addToFav([props.selectedMovie])}><img  src="./icons/heart-regular.svg" onMouseOver={(e) => {e.target.src = "./icons/heart-solid.svg"}} onMouseOut={(e) => {e.target.src = "./icons/heart-regular.svg"}}></img></div>
                        <button className="pl-2 pr-2 ml-10 bg-white text-black rounded-full" onClick={() =>{props.setSingleMovieView(false)}}>Close</button>
                    </div>
                    <div className="w-24">
                        <h1>Ratings</h1>
                        <Ratings ratings={props.selectedMovie.ratings}></Ratings>
                        <h1>Your Rating</h1>
                        
                    </div>
                </div>
            </div>
            <Favorites favoriteMovies={props.favoriteMovies}></Favorites>
            <div >
            <Modal className="fixed w-screen  top-0 left-50 right-0 " show={showModal} closeButton>
                <div className="flex justify-center h-screen items-center bg-blur bg-white bg-opacity-80">
                    <img className="rounded-xl" onError="https://via.placeholder.com/500" src={"https://image.tmdb.org/t/p/w500/" + props.selectedMovie.poster}></img>
                    <button className="bg-white p-10 rounded ml-10" onClick={handleClose}>Close</button>
                </div>
            </Modal>
            </div>
        </main>
    )
}
export default MovieViewer