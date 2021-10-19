import { Component } from "react";
import React from 'react';
import ReactDOM from 'react-dom';
import '../stylesheets/Btn.css';
import '../stylesheets/App.css';
import {gachaData, dropRates} from '../data/gachaData';
import {addStars, getWallet} from './Footer.js';

class GetPrize extends Component{
    
    render(){
        let freshKey = Math.random();

        //choose which rarity you get (1*, 2*, etc.)
        let dropRarity = getRandomInt(dropRates);
        // console.log('hello' + dropBuckets[Number(dropRarity)].length);
        // let dropPrize = getRandomInt(dropBuckets[dropRarity].length);

        let prizeNum = getRandomInt(dropRates);


        let prizeName = gachaData[Number(prizeNum)].name;
        let prizeImg = gachaData[Number(prizeNum)].img;
        let prizeRarity = gachaData[Number(prizeNum)].rarity;
        addStars(gachaData[Number(prizeNum)].rarityVal);
        
        return(
            
            <div id = 'PrizeResult' key = {freshKey}>
                <img src= {prizeImg} alt = 'PrizeImg' id = 'PrizeImg' className ='animate__animated  animate__tada'></img><br></br>
                <span>"{prizeName}"</span><br></br>
                <span>Rarity: {prizeRarity}</span><br></br>

            </div>
            
        )
    }


}
function getRandomInt(prob){
    
    let i, sum = 0, r = Math.random();
    for (i in prob){
        sum += prob[i][0];
        console.log("greater than or equal to: " + prob[i][1]);
        if(r <=sum){
            return i;
        }
    }
}

function checkEndGame(money){
    if(Number(money) <= 0){
        document.getElementById('Roll').classList.add('noClick');
        document.getElementById('Roll').classList.add('hidden');
        document.getElementById('Replay').classList.remove('hidden');
        wobbleReplay();
    }
}

function wobbleReplay(){
    
    document.getElementById('Replay').classList.add('animate__animated');
    document.getElementById('Replay').classList.add('animate__wobble');
    setTimeout(function(){
        document.getElementById('Replay').classList.remove('noClick');
        document.getElementById('Replay').classList.remove('animate__animated');
        document.getElementById('Replay').classList.remove('animate__wobble');
    },600);
}

function hideCapsule(){
    document.getElementById('CapsuleTop').classList.add('hidden');
    document.getElementById('CapsuleBot').classList.add('hidden');

    document.getElementById('CapsuleFrame').style.height = '0rem';
    document.getElementById('PrizeFrame').classList.remove('hidden');

    document.getElementById('Roll').classList.remove('noClick');
    checkEndGame(getWallet());
}
function showCapsule(){
    document.getElementById('CapsuleBot').classList.remove('animate_headShake');
    document.getElementById('CapsuleBot').classList.add('animate_headShake');

    document.getElementById('CapsuleTop').classList.remove('hidden');
    document.getElementById('CapsuleBot').classList.remove('hidden');
    
    document.getElementById('CapsuleFrame').style.height = '12rem';
    document.getElementById('PrizeFrame').classList.add('hidden');
    document.getElementById('Roll').classList.add('noClick');
}
 
class Gacha extends Component{

    render(){
        

        return(
        
            <div>
                <div id = "PrizeFrame" />
                
                <div id = "CapsuleFrame">
                    <img src = './images/capsuleTop.svg' id = 'CapsuleTop' className = 'Capsule animate__animated animate__headShake' alt = ''></img>
                    <img src = './images/capsuleBot.svg' id = 'CapsuleBot' className = 'Capsule animate__animated animate__headShake' alt = ''></img>
                </div>
                
                <br></br>
                <div id = 'ButtonFrame'>
                    <span id = 'Roll' className = 'rollBtn' onClick={
                        function(){
                            showCapsule();
                            setTimeout(function(){
                                ReactDOM.render(<GetPrize />, document.getElementById('PrizeFrame'));hideCapsule();
                            }, 600);
                        }
                        
                    }></span>
                    <span id = 'Replay' className = 'replayBtn hidden noClick' onClick={
                        function(){
                            window.location.reload();
                        }
                        
                    }></span>
                </div>

            </div>
            
        )
    }

}

export default Gacha;