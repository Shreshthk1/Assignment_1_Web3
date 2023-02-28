function Ratings (props) {
    let rating = Math.round(props.ratings.average*2)/2;
    
    let stars = []
    if (rating % 1 === 0){
        for (let index = 0; index <= rating; index++) {
            stars.push(<img src="./icons/star-solid.svg"></img>)
        }
    } else{
        for (let index = 0; index < rating-0.5; index++) {
            stars.push(<img className="" src="./icons/star-solid.svg"></img>)
        }
        stars.push(<img src="./icons/star-half-stroke-solid.svg"></img>)
    }

    return(
        <div className="w-24 flex justify-between bg-white rounded-xl">
            {stars.map(image => image)}            
        </div>
    )
}
export default Ratings