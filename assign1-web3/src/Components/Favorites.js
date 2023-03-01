import { useState } from "react"

function Favorites (props) {

    if(props.favoriteMovies.length === 0 || props.favoriteMovies === undefined) {
        return( <ul className=" w-1/4 h-screen bg-white bg-opacity-30 rounded text-center text-white"> <li> No favorite Movies </li></ul> )
    }
    console.log(props.favoriteMovies)
    return(
        <div className="w-1/4 h-screen bg-white bg-opacity-30 rounded overflow-auto overflow-y-scroll">
            <ul className="">
                {
                    props.favoriteMovies.map(movie => {
                        return (
                        <li className="flex ">
                            <div>
                                <img src={"https://image.tmdb.org/t/p/w92/" + movie.poster} onError="https://via.placeholder.com/92" className="rounded-lg "></img>
                                {/* <p className="relative text-4xl">x</p> */}
                            </div>
                            <p className="text-center m-auto text-white">{movie.title}</p>
                        </li>)
                    })  
                }
            </ul>
        </div>
    )
}
export default Favorites