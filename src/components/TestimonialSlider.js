import React, { Component } from 'react';
// const pMinDelay = require('p-min-delay');
const testimonialArray = [
    {
        id: 0, 
        author: "Barry Z", 
        text: "\"Incredible thanks to Trevor, who in 1 week, produced what the [OMITTED] vendor could not do in 8 weeks (and 13 teleconferences)\""
    },
    {
        id: 1,
        author: "JoAnna N",
        text: "\"I used to struggle with my website (formatting, updating, getting it to look and work the way I want it to). Having Trevor take the reins on it has made my life easier and my online business more streamlined and able to flourish. He is patient, knowledgeable, diligent, and a pleasure to work with. highly recommend him to anyone looking for website help that wants to work with someone trustworthy, caring, and conscientious!\""
    },
    {
        id: 2,
        author: "Bob H",
        text: "\"Trevor did an excellent job, and was able to execute any request I had.\""
    }
];
const oneDot = <div className="dots-container">
    <div className="solid-dot"></div>
    <div className="empty-dot"></div>
    <div className="empty-dot"></div>
</div>
const twoDots = <div className="dots-container">
    <div className="empty-dot"></div>
    <div className="solid-dot"></div>
    <div className="empty-dot"></div>
</div>
const threeDots = <div className="dots-container">
    <div className="empty-dot"></div>
    <div className="empty-dot"></div>
    <div className="solid-dot"></div>
</div>

// let deviceWindow = document.getElementById('root');
// let windowHeight = deviceWindow.clientHeight;

class TestimonialSlider extends Component {
    constructor(props){
        super(props);
        this.state = {
            testimonial: testimonialArray[0].text,
            testimonialSource: testimonialArray[0].author,
            testimonialAnimation: false,
            testimonialId: testimonialArray[0].id,
            testimonialDots: oneDot,
            // pageY: '',
            jumpAnimation: ""
        }
        this.testimonialHandlerLeft = this.testimonialHandlerLeft.bind(this);
        this.testimonialHandlerRight = this.testimonialHandlerRight.bind(this);
        this.animateOnView = this.animateOnView.bind(this);
        // this.handleScroll = this.handleScroll.bind(this);
    }
    
    animateOnView(){
        this.setState({jumpAnimation: 'Jump-animation'});
    }
  
    // handleScroll(){
    //     console.log(windowHeight);
    // }

    testimonialHandlerRight(){
        if(this.state.testimonial === testimonialArray[0].text){
            this.setState({
                testimonialId: testimonialArray[1].id, 
                testimonial: testimonialArray[1].text, 
                testimonialSource: testimonialArray[1].author,
                testimonialDots: twoDots
            })
        } else if (this.state.testimonial === testimonialArray[1].text){
            this.setState({
                testimonialId: testimonialArray[2].id, 
                testimonial: testimonialArray[2].text, 
                testimonialSource: testimonialArray[2].author,
                testimonialDots: threeDots
            })
        } else {
            this.setState({
                testimonialId: testimonialArray[0].id, 
                testimonial: testimonialArray[0].text, 
                testimonialSource: testimonialArray[0].author,
                testimonialDots: oneDot
            })
        }
    }
    testimonialHandlerLeft(){
        if(this.state.testimonial === testimonialArray[1].text){
            this.setState({
                testimonialId: testimonialArray[0].id, 
                testimonial: testimonialArray[0].text, 
                testimonialSource: testimonialArray[0].author,
                testimonialDots: oneDot
            })
        } else if (this.state.testimonial === testimonialArray[2].text){
            this.setState({
                testimonialId: testimonialArray[1].id, 
                testimonial: testimonialArray[1].text, 
                testimonialSource: testimonialArray[1].author,
                testimonialDots: twoDots
            })
        } else {
            this.setState({
                testimonialId: testimonialArray[2].id, 
                testimonial: testimonialArray[2].text, 
                testimonialSource: testimonialArray[2].author,
                testimonialDots: threeDots
            })
        }
    }
    render(){
        return(
            <div className="TestimonialSlider-container">
                <h2 className="Align-center White">Don't just take my word for it, see what my clients are saying:</h2>
                <div className="TestimonialSlider Testimonial-slide-in White">
                    <div>
                        <button className="See-more-btn left-testimonial-btn" onClick={this.testimonialHandlerLeft} >{"<"}</button>
                        <button onClick={this.testimonialHandlerRight} className="See-more-btn">{">"}</button>
                        <div onTouchStart={this.testimonialHandlerRight}>
                            {this.state.testimonial}
                        </div>
                        <div className="Font-weight-700">
                            {this.state.testimonialSource}          
                        </div>
                        <div className="dots-container">
                            {this.state.testimonialDots}
                        </div>
                    </div>
                    
                    <div className={`${this.state.jumpAnimation}`}>
                        Animate on view?
                    </div>
                </div>
            </div>
            
            
        );
    }
}
export default TestimonialSlider;