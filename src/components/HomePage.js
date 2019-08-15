import React, { Component } from 'react';
import TestimonialSlider from './TestimonialSlider';

class HomePage extends Component{
    render(){
        return(
            <div className="HomePage Margin-div">
                <h2>
                    Spread the word, make money, and help people!
                </h2>
                <div>
                    <TestimonialSlider />
                </div>
                <div>
                    
                </div>
            </div>
        );
    }
}
export default HomePage;