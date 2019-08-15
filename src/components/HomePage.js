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
                    <p>
                        Owning a website can be so many things! You can use it to help the world, and you can also use it 
                        to put a little money in your pocket!
                    </p>
                </div>
                <div>
                    <TestimonialSlider />
                </div>
                <div>
                <h3>Who am I?</h3>
                <div>
                    <p>
                        I am a self taught web applications engineer. Sure that means I don't have a fancy degree affirming 
                        my skills, but I can show you the work I've done, and I can tell you more about what that entails.
                    </p>
                </div>
                </div>
            </div>
        );
    }
}
export default HomePage;