import React, { Component } from 'react';
import Img from '../images/code-cloud-v6.png';

class FeaturedImg extends Component {
    render(){
        return(
            <div>
                <div className="Featured-img-container">
                    <img className="Featured-img-img" src={Img} alt="Vaughn Web Development codes" />
                </div>
            </div>
            
        ); 
    }
}
export default FeaturedImg;