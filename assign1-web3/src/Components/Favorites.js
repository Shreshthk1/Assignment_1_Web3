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
                        return (<li className="flex "><img src={"https://image.tmdb.org/t/p/w92/" + movie.poster} className="rounded-lg p-5"></img> <p className="text-center m-auto text-white">{movie.title}</p></li>)
                    })
                }
            </ul>
        </div>
    )
}
export default Favorites