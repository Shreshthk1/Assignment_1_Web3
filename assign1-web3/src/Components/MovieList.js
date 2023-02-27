import { useState } from "react"
function MovieList(props) {
    const [moviesList, setMoviesList] = useState(props.moviesList)
    
    const filterTitle = () => {
        
        let tempList = moviesList.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))
        setMoviesList([...tempList])
    }

    const filterYear = () => {
        
        let tempList = moviesList.sort((a,b) => Number(a.release_date.substring(0,4)) - Number(b.release_date.substring(0,4)))
        setMoviesList([...tempList])
    }
    const filterRating = () => {
        console.log('CLICK')
        let tempList = moviesList.sort((a,b) => a.ratings.average - b.ratings.average)
        setMoviesList([...tempList])
    }
    const filterPopularity = () => {
        let tempList = moviesList.sort((a,b) => a.ratings.popularity - b.ratings.popularity)
        setMoviesList([...tempList])
    }

    const addToFav = (e) => {
        let movieID = Number(e.target.id)
        let favMovie = moviesList.filter(movie => movie.id === movieID)
        props.addToFav(favMovie);
    }

    return(
        <div className="w-2/3 h-screen  rounded-xl p-10 bg-white bg-opacity-30 overflow-auto " >
            <table className="text-center w-full table-auto overflow-scroll">
                <thead className="text-white">
                    <tr>
                        <th>Poster</th>
                        <th className="cursor-pointer" onClick={filterTitle}>Title</th>
                        <th className="cursor-pointer" onClick={filterYear}>Year</th>
                        <th className="cursor-pointer" onClick={filterRating}>Rating</th>
                        <th className="cursor-pointer" onClick={filterPopularity}>Popularity</th>  
                    </tr>
                
                </thead>
                <tbody>
                    {props.moviesList.map(movie => {
                        return (
                            <tr className="">
                                <td className="bg-white rounded-l-lg flex justify-center"><img src={"https://image.tmdb.org/t/p/w92/" + movie.poster} className="rounded-md"></img></td>
                                <td className="bg-white  text-center" onClick={filterTitle} >{movie.title}</td> 
                                <td className=" bg-white text-center">{movie.release_date.substring(0,4)}</td> 
                                <td className=" bg-white text-center">{movie.ratings.average}</td>
                                <td className=" bg-white text-center">{movie.ratings.popularity.toFixed(1)}</td>
                                <td className=" bg-white">
                                    {/* Change img on hover code found from https://www.appsloveworld.com/reactjs/100/11/change-image-on-hover-in-jsx */}
                                    <div className="cursor-pointer w-5 items-center peer"><img  src="./icons/heart-regular.svg" onClick={addToFav} id={movie.id} onMouseOver={(e) => {e.target.src = "./icons/heart-solid.svg"}} onMouseOut={(e) => {e.target.src = "./icons/heart-regular.svg"}}></img></div>
                                    {/* <div className="cursor-pointer w-5 items-center hidden peer-hover:flex"><img  src="./icons/heart-solid.svg" onClick={addToFav} id={movie.id}></img></div> */}
                                </td>
                                <td className=" bg-white rounded-r-lg text-center"><button className="bg-black text-white hover:bg-green-300 hover:text-black  p-5 rounded">View</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            
        </div>
    )
} 
export default MovieList