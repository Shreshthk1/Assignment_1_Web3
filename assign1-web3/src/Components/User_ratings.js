function User_ratings (props) {

    let starsArr = []
    let rating = 0;
    
    for( let index = 0; index < 10 ; index++) {
        starsArr.push( <img id={index} src="./icons/star-regular.svg" onChange={(e)=>{rating = Number(e.target.id)}} > </img>)
    }
    
    return(
        <div>
            {starsArr.map(img => img)}
        </div>
    )
}

export default User_ratings