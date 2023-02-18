import logo from './logo.svg';
import './App.css';
import Home from './Components/Home.js'
import { useEffect, useState } from 'react';


function App() {
const [movies, setMovies] = useState([]);
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
    <Home movieList={movies}/>
  );
}

export default App;
