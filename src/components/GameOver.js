import { Component } from "react";

import '../stylesheets/GameOver.css';

class GameOver extends Component{
    render(){
        return(
            <div class = 'resultsContainer'>
                <h1 id = 'results' >Results</h1>
                <button> replay</button>
            </div>
            
        )
    }
}

export default GameOver;