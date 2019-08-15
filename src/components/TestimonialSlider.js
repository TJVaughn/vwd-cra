import React, { Component } from 'react';

const barryTest = {text: "\"Incredible thanks to Trevor, who in 1 week, produced what the [OMITTED] vendor could not do in 8 weeks (and 13 teleconferences)\"",
source: "-Barry Z"}


const JoAnnaTest = {text: "\"I used to struggle with my website (formatting, updating, getting it to look and work the way I want it to). Having Trevor take the reins on it has made my life easier and my online business more streamlined and able to flourish. He is patient, knowledgeable, diligent, and a pleasure to work with. highly recommend him to anyone looking for website help that wants to work with someone trustworthy, caring, and conscientious!\"",
source: "-JoAnna N"}

class TestimonialSlider extends Component {
    constructor(props){
        super(props);
        this.state = {
            testimonial: barryTest.text,
            testimonialSource: barryTest.source
        }
        this.testimonialHandler = this.testimonialHandler.bind(this);
    }
    testimonialHandler(){
        this.setState({testimonial: JoAnnaTest.text, testimonialSource: JoAnnaTest.source});
        if(this.state.testimonial===JoAnnaTest.text){
            this.setState({testimonial: barryTest.text, testimonialSource: barryTest.source})
        }
    }
    render(){
        return(
            <div className="TestimonialSlider">
                <div onPointerEnter={this.testimonialHandler}>{this.state.testimonial}</div>
                <div className="Font-weight-700">{this.state.testimonialSource}</div>
            </div>
            
        );
    }
}
export default TestimonialSlider;