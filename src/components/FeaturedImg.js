import React, { Component } from 'react';
import Img from '../images/code-cloud-v4.png';

const randomBinaryArr = [" ", "Vaughn Web Development", " "];
function addToRandomBinary() {
  for(let i = 0; i < 25; i++){
    if(Math.random() >= 0.5){
      randomBinaryArr.push(1);
    } else {
      randomBinaryArr.push(0);
    }
  }
  for(let i = 0; i < 25; i++){
    if(Math.random() >= 0.5){
      randomBinaryArr.unshift(1);
    } else {
      randomBinaryArr.unshift(0);
    }
  }
}

setTimeout(addToRandomBinary(), 100);

const randomBinaryMap = randomBinaryArr.map(item => 
  <div key={`random-binary-index${0}`} className="Display-inline">{item}</div>
)

class FeaturedImg extends Component {
    render(){
        return(
            <div>
                <div className="Featured-img-container">
                    <img className="Featured-img-img" src={Img} alt="Vaughn Web Development codes" />
                </div>
                <div className="Binary-animation-container">
                    <div className="Binary-animation">
                        {randomBinaryMap}
                    </div>
                </div>
                
            </div>
            
        ); 
    }
}
export default FeaturedImg;