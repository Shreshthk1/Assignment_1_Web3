import { useState } from 'react';

function MovieFilters(props) {
    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [minYear, setMinYear] = useState('');
    const [maxYear, setMaxYear] = useState('');
    const [minRating, setMinRating] = useState('');
    const [maxRating, setMaxRating] = useState('');
    const [titleRadio, isTitleSelected] = useState(true);
    const [genreRadio, isGenreSelected] = useState(true);
    const [yearRadio, isYearSelected] = useState(true);
    const [ratingRadio, isRatingSelected] = useState(true);

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

    const handleRadio = () =>{
        if(!titleRadio) {
            isGenreSelected(true)
            isYearSelected(true)
            isRatingSelected(true)
        }else if(!genreRadio) {
            isTitleSelected(true)
            isYearSelected(true)
            isRatingSelected(true)
        } else if (!yearRadio) {
            isGenreSelected(true)
            isTitleSelected(true)
            isRatingSelected(true)
        } else if (!ratingRadio) {
            isGenreSelected(true)
            isYearSelected(true)
            isTitleSelected(true)
        }
    }

    const applyFilters = () =>{

        if(title !="" ) {
            let filteredMovie = props.originalMoviesList.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase()))
            props.setCopyList([...filteredMovie])
        } else if (genre != ''){
            let filteredMovie = props.originalMoviesList.filter(movie => {
                let filter =  movie.details.genres.some(genreObj => genreObj.name.toLowerCase() === genre.toLowerCase())
                return filter    
            })
            props.setCopyList([...filteredMovie])
        } else if (minYear != '' && maxYear != ''){
            let filteredMovie = props.originalMoviesList.filter(movie => {
                let year = Number(movie.release_date.substring(0,4))
                return year >= Number(minYear) && year <= Number(maxYear) 
            })
            props.setCopyList([...filteredMovie])
        } else if (minRating != '' && maxRating != '') {
            let filteredMovie = props.originalMoviesList.filter(movie => {
                return movie.ratings.average >= Number(minRating) && movie.ratings.average <= Number(maxRating) 
            })
            props.setCopyList([...filteredMovie])
        }
        
    }

    const clearFilters = () => {
        setTitle('')
        setGenre('')
        setMinYear('')
        setMaxYear('')
        setMinRating('')
        setMaxRating('')
        props.setCopyList(props.originalMoviesList)
    }


    return (
        <div className="text-white w-1/6" >
        <h2 className='text-center'>Movie Filters</h2>
        <div id='form' className='pt-5'>
            <div className='flex justify-between' >
                <div><input type="radio" name="filters" onChange={() => {isTitleSelected(false); }}/>
                <label className='text-lg ml-2'>Title</label>
                </div>
                <input type="text"  disabled={titleRadio} className=" rounded-full border-white text-black w-1/2 "    value={title} onChange={handleTitleChange}/> 
            </div>
            <br />
            <div className='flex justify-between'>
                <div>
                <input type="radio" name="filters" onChange={() => {isGenreSelected(false); }}/>
                <label className='text-lg ml-2'>Genre</label>
                </div>
                <select disabled={genreRadio} className='text-black rounded-full w-1/2' value={genre} onChange={handleGenreChange}>
                    <option ></option>
                    {props.genres.map((genre) => {
                    return <option key={genre}>{genre}</option>;
                    })}
                </select>
            </div>
            <br />
            <div  className='flex justify-between'>
                <div>
                    <input type="radio"  name="filters" onChange={() => {isYearSelected(false); }}/>
                    <label className='text-lg ml-2'>Year</label>
                    <br></br>
                </div>
                <div className='w-1/2'>
                    <label>MIN</label>
                    <input disabled={yearRadio} className='rounded-full text-black w-full' type="text" value={minYear} onChange={handleMinYearChange} />
                    <br></br>
                    <label >MAX</label>
                    <input disabled={yearRadio} className='rounded-full text-black w-full'type="text" value={maxYear} onChange={handleMaxYearChange} />
                </div>
            </div>
            <br />
            <div className='flex justify-between '>
                <div>
                    <input type="radio" name="filters" onChange={() => {isRatingSelected(false); }}/>
                    <label className='text-lg ml-2'>Rating</label>
                </div>
                <div className='w-1/2'>
                <div>
                    <label>MIN</label>
                    <input disabled={ratingRadio} className='rounded-full text-black w-full'type="text" value={minRating} onChange={handleMinRatingChange} />
                </div>
                <br />
                <div>
                    <label>MAX</label>
                    <input disabled={ratingRadio} className='rounded-full text-black w-full'type="text" value={maxRating} onChange={handleMaxRatingChange} />
                </div>
                </div>
            </div>
            <div className='flex justify-between pt-5'>
                <button className="px-4 py-2  bg-white bg-opacity-30 rounded-full hover:bg-white hover:text-black" onClick={applyFilters}>Filter</button>
                <button className="px-4 py-2 bg-white bg-opacity-30 rounded-full hover:bg-white hover:text-black" onClick={clearFilters}>Clear</button>
            </div>
            </div>
        </div>
    );
}
export default MovieFilters