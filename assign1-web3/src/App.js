import './App.css';
import Home from './Components/Home.js'
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieBrowser from './Components/MovieBrowser';
import {movieData} from './movieData.js'
import MovieViewer from './Components/MovieViewer';



function App() {
let movieList = movieData.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))
const [movies, setMovies] = useState(movieList);
const [selectedMovie, setSelected] = useState({});

useEffect(()=> {
  if(localStorage.getItem('Movies') == null) {
    setMovies(localStorage.getItem('Movies'))
  } else {
    const url = "";
    fetch(url)
    .then(resp => resp.json)
    .then(data => {
      setMovies(data); 
      localStorage.setItem('Movies', data)
    });
  }
});

  return (

  <BrowserRouter>
  <Routes>
    <Route path = "/" element = {<Home moviesList={movies} setSelected={setSelected}/>} />
    <Route path = "/browse" element = {<MovieBrowser searchedMovie={selectedMovie} moviesList={movies}/>} />
    <Route path = "/movie" element = {<MovieViewer></MovieViewer>}></Route>
  </Routes>
  </BrowserRouter>
    
  );
}

export default App;
