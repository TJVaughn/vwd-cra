import React, { Component } from 'react';
// import Img from '../images/code-cloud-v6.png';
// import Img from '../images/simple-shapes-feat-img.png';

class FeaturedImg extends Component {
        static defaultProps = {
            pageTitle: ""
        }
    
    render(){
        return(
            <div>
                <div className="Featured-img-container Fade-in">
                    <div className="Page-title-container">
                        <h1 className="Page-title">{this.props.pageTitle}</h1>
                    </div>
                </div>
            </div>
        ); 
    }
}
export default FeaturedImg;