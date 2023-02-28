import React from "react";
import {Link} from "react-router-dom"
import MovieBrowser from "./MovieBrowser";
// import backgroundImg from '../Images/Home-Background.jpg';

class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            titleInput: "",
            selectedMovie: {},
            isBrowse: false,
            moviesList: props.moviesList
        }
    }

    textChange = (e) => {
        this.setState({titleInput: e.target.value})
    }
    
    setIsBrowse = () => {
        this.setState({isBrowse: false})
    }


    render() {
        return(
            <main className="bg-no-repeat bg-cover  "style={{backgroundImage: `url("/Home-Background.jpg")`}} > 
                {this.state.isBrowse ? <MovieBrowser moviesList = {this.state.moviesList} searchedTitle={this.state.titleInput} setIsBrowse ={this.setIsBrowse}></MovieBrowser> : 
                <div className="w-screen h-screen flex items-center justify-center backdrop-blur-md">
                    <div className="card w-1/4 bg-white shadow-lg rounded  flex flex-col p-5" >
                        <div className="w-full text-3xl">
                            <h2 className="font-bold text-center"> Movie Browser </h2>
                        </div>
                        <br/>
                        <div className=" flex justify-center "><input className="border rounded border-rose-500 w-2/4" type="text" onChange={this.textChange} placeholder="Movie Title"/></div>
                        <br/>
                        <div className="flex justify-evenly ">
                            <button className="border border-black-500 w-1/4 text-center hover:bg-blue-500 rounded hover:text-white" onClick={() => this.setState({isBrowse: true})}> Search Movie </button>
                            <button className="bg-transparent border border-black-500 w-1/4 p-0.5 hover:bg-blue-500 rounded hover:text-white" onClick={ () => this.setState({isBrowse: true})}> Browse Movies </button>
                        </div>
                    </div>
                </div>
                }
            </main>
            
        )
    }
}

export default Home;