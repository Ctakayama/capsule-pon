import { Component } from "react";
import ReactDOM from 'react-dom';
let numStars = 0;
let moneyLeft = 100;

class Footer extends Component{
    render(){
        return(
            <div class = 'animate__animated animate__fadeIn animate__delay-1s body-Text result-Text' id = 'Progress'>Roll the most ★'s without running out of money.<br></br>
            <details>
            <summary class = 'body-Text'>drop rates</summary>
            ★★ = 60%
            ★★★ = 20%
            ★★★★ = 15%
            ★★★★★ = 5%
            
            </details></div>
            
        )
    }
}

export const addStars = (num)=>{
    
    numStars += num;
    moneyLeft-=5;
    console.log("this is numstars: "+numStars);
    updateProgress();
}

function updateProgress(){
    ReactDOM.render(<span className = 'animate__animated animate__rotateInUpLeft body-Text result-Text'>★'s acquired: {numStars} <br></br>
    $ remaining: {moneyLeft}
    </span>,
    document.getElementById('Progress'))
}

export function getWallet(){
    return moneyLeft;
}

export default Footer;