import React from "react";
// import backgroundImg from '../Images/Home-Background.jpg';

class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            movies: props.MovieList,
            selectedMovie: null,
            titleInput: ""
        }
    }

    showAll = props => {
        console.log(props);
    }

    showSpecific = props => {
        console.log(props)
    }
    textChange = e => {
        console.log(e.target.value);
        this.setState({titleInput: e.target.value })
    }

    render() {
        return(
            <main className="h-screen w-screen" style={{backgroundImage: `url("/Home-Background.jpg")`, backgroundRepeat: 'no-repeat', backgroundSize: '100%'}}>
             
                <div className="max-w-sm flex items-center justify-center bg-white p-10 shadow-lg rounded overflow">
                    <div className="w-full">
                        <h2 className="font-bold text-x1"> Movie Browser </h2>
                    </div>
                    
                    <div >
                        <label> Title: <input type="text" onChange={this.textChange}/></label>
                        <br />
                        <button onClick={this.showSpecific}> Show Matching Movies</button>
                        <button onClick={this.showAll}> Show All Movies</button>
                    </div>
                </div>
            </main>
        )
    }
}

export default Home;