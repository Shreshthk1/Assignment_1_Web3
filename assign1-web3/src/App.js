import './App.css';
import Home from './Components/Home.js'
import { useEffect, useState } from 'react';

function App() {

const [movies, setMovies] = useState([]);
const [selectedMovie, setSelected] = useState({});

useEffect(()=> {
  if(localStorage.getItem('Movies') != null) {
    setMovies(JSON.parse(localStorage.getItem('Movies')))
  } else {
    const url = "https://www.randyconnolly.com/funwebdev/3rd/api/movie/movies-brief.php?limit=20";
    fetch(url)
    .then(resp => resp.json())
    .then(data => {
      let movieList = data.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))
      setMovies([...movieList]);
      localStorage.setItem('Movies', JSON.stringify(movieList))
    });
  }
}, []);

  return (
  <Home moviesList={movies} setSelected={setSelected}/>
  );
}

export default App;
