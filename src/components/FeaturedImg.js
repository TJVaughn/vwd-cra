import React, { Component } from 'react';
// import Img from '../images/code-cloud-v6.png';
// import Img from '../images/simple-shapes-feat-img.png';

class FeaturedImg extends Component {
        static defaultProps = {
            pageTitle: "Vaughn Web Development"
        }
    
    render(){
        return(
            <div>
                <div className="Featured-img-container">
                    {/* <img className="Featured-img-img" src={Img} alt="Vaughn Web Development codes" /> */}
                    <div className="Page-title-container">
                        
                        <h1 className="Page-title">{this.props.pageTitle}</h1>
                    </div>
                </div>
            </div>
            
        ); 
    }
}
export default FeaturedImg;