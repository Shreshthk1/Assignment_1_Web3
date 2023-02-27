import { useState } from 'react';

function MovieFilters(props) {
    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [minYear, setMinYear] = useState('');
    const [maxYear, setMaxYear] = useState('');
    const [minRating, setMinRating] = useState('');
    const [maxRating, setMaxRating] = useState('');
    const [titleRadio, isTitleSelected] = useState(false);
    const [genreRadio, isGenreSelected] = useState(false);
    const [yearRadio, isYearSelected] = useState(false);
    const [ratingRadio, isRatingSelected] = useState(false);

    const [originalMoviesList, dontNeed] = useState(props.originalMoviesList)

    const handleTitleChange = (event) => {
    setTitle(event.target.value);
    }

    const handleGenreChange = (event) => {
    setGenre(event.target.value);
    }

    const handleMinYearChange = (event) => {
    setMinYear(event.target.value);
    }

    const handleMaxYearChange = (event) => {
    setMaxYear(event.target.value);
    }

    const handleMinRatingChange = (event) => {
    setMinRating(event.target.value);
    }

    const handleMaxRatingChange = (event) => {
    setMaxRating(event.target.value);
    }

    const applyFilters = () =>{

        if(title !="" ) {
            let filteredMovie = props.originalMoviesList.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase()))
            props.setMoviesList([...filteredMovie])
        } else if (genre != ''){
            let filteredMovie = props.originalMoviesList.filter(movie => {
                let filter =  movie.details.genres.some(genreObj => genreObj.name.toLowerCase() === genre.toLowerCase())
                return filter    
            })
            props.setMoviesList([...filteredMovie])
        } else if (minYear != '' && maxYear != ''){
            let filteredMovie = props.originalMoviesList.filter(movie => {
                let year = Number(movie.release_date.substring(0,4))
                return year >= Number(minYear) && year <= Number(maxYear) 
            })
            props.setMoviesList([...filteredMovie])
        } else if (minRating != '' && maxRating != '') {
            let filteredMovie = props.originalMoviesList.filter(movie => {
                return movie.ratings.average >= Number(minRating) && movie.ratings.average <= Number(maxRating) 
            })
            props.setMoviesList([...filteredMovie])
        }
        
    }

    const clearFilters = () => {
        setTitle('')
        setGenre('')
        setMinYear('')
        setMaxYear('')
        setMinRating('')
        setMaxRating('')
        props.setMoviesList(props.originalMoviesList)
    }


    return (
        <div className="text-white w-1/6" >
        <h2 className='text-center'>Movie Filters</h2>
        <div className='flex justify-between' disabled = {!titleRadio}>
            <input type="radio"/>
            <label>Title</label>
            <input type="text" className="rounded-full border-white text-black "  value={title} onChange={handleTitleChange}/> 
        </div>
        <br />
        <div className='flex justify-between'>
            <input type="radio"/>
            <label>Genre</label>
            <select className='text-black rounded-full' value={genre} onChange={handleGenreChange}>
                <option></option>
                {props.genres.map((genre) => {
                return <option key={genre}>{genre}</option>;
                })}
            </select>
        </div>
        <br />
        
            <input type="radio" />
            <label>Year</label>
            <br></br>
        <div className=''>
            <label>MIN</label>
            <input className='rounded-full text-black' type="text" value={minYear} onChange={handleMinYearChange} />
            <br></br>
            <label>MAX</label>
            <input className='rounded-full text-black'type="text" value={maxYear} onChange={handleMaxYearChange} />
        </div>
        <br />
        <div className=''>
            <input type="radio" />
            <label>Rating</label>
            <br />
            <label>MIN</label>
            <input className='rounded-full text-black'type="text" value={minRating} onChange={handleMinRatingChange} />
            <br />
            <label>MAX</label>
            <input className='rounded-full text-black'type="text" value={maxRating} onChange={handleMaxRatingChange} />
            <br />
        </div>
        <div className='flex justify-between pt-5'>
            <button className="px-4 py-2  bg-white bg-opacity-30 rounded-full hover:bg-white hover:text-black" onClick={applyFilters}>Filter</button>
            <button className="px-4 py-2 bg-white bg-opacity-30 rounded-full hover:bg-white hover:text-black" onClick={clearFilters}>Clear</button>
        </div>
        </div>
    );
}
export default MovieFilters