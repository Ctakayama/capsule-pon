import { Component } from "react";
import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import '../stylesheets/Btn.css';
import '../stylesheets/App.css';
import {gachaWeight, gachaData} from '../data/gachaData';




class GetPrize extends Component{
    
    render(){
        let prizeNum = getRandomInt(gachaWeight);
        let prizeName = gachaData[Number(prizeNum)].name;
        let prizeImg = gachaData[Number(prizeNum)].img;
        return(
            
            <div id = 'PrizeResult'>
                <img src= {prizeImg} alt = 'PrizeImg' id = 'PrizeImg'></img><br></br>
                <span>You got this: {prizeName}</span><br></br>

            </div>
            
        )
    }


}
function getRandomInt(prob){
    
    let i, sum = 0, r = Math.random();
    for (i in prob){
        sum += prob[i];
        if(r <=sum){
            console.log(sum);
            return i;
        }
    }
}

function hideCapsule(){
    document.getElementById('CapsuleTop').classList.add('hidden');
    document.getElementById('CapsuleBot').classList.add('hidden');
}
 
class Gacha extends Component{

    render(){
        

        return(
        
            <body>
                <div id = "PrizeFrame" />
                
                <div id = "CapsuleFrame">
                    <img src = './images/capsuleTop.svg' id = 'CapsuleTop' class = 'Capsule animate__animated animate__headShake' alt = 'capsule'></img>
                    <img src = './images/capsuleBot.svg' id = 'CapsuleBot' class = 'Capsule animate__animated animate__headShake' alt = 'capsule'></img>
                </div>

                

                
                
                
                <br></br>
                <span className = 'rollBtn' onClick={
                    function(){
                        setTimeout(function(){
                            ReactDOM.render(<GetPrize />, document.getElementById('PrizeFrame'));hideCapsule()
                        }, 1000);
                    }
                    
                    }></span>
            </body>
            
        )
    }

}

export default Gacha;