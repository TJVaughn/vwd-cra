import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import TestimonialSlider from './TestimonialSlider';
import BackToTop from './BackToTop';

class HomePage extends Component{
    render(){
        return(
            <div className="HomePage Margin-div">
                <h2>
                    Spread the word, make money, and help people!
                </h2>
                <BackToTop />
                <LazyLoad once height={100} offset={-100}>
                    <div className="Fade-in">
                        <p>
                            Owning a website can be so many things! You can use it to help the world, and you can also use it 
                            to put a little money in your pocket!
                        </p>
                        <p>
                            It has never been easier to put together a website if you are an average person. So you might be wondering
                            why you or anyone would need to hire out web development.
                        </p>
                        <p>
                            It is a valid concern and one that I hope you'll give me a moment to comment on. 
                        </p>
                    </div>
                </LazyLoad>
                {/* AFTER THE FOLD */}
                <LazyLoad once height={100} offset={-100}>
                    <div className="Fade-in">
                        <p>
                            Yes, in modern times, it's never been easier to start a website. There are many tools and page builders
                            being peddled every day.
                        </p>
                        <p>
                            But just because you can start a website easily, doesn't guarantee any success, or guarantee that it will
                            convert, or that the user will use it how you intended. 
                        </p>
                        <p>
                            This is where a developer comes in.
                        </p>
                        <p>
                            Someone who has been focused on creating better and better websites as their career.
                        </p>
                        <p>
                            Someone who is determined on creating the best result for their clients, and their own achievements, and has 
                            experience making that happen.
                        </p>
                        <p>
                            Someone who has worked on numerous websites, and has experienced what works, what doesn't, and 
                            what it takes to get results.
                        </p>
                    </div>
                </LazyLoad>
                
                <div>
                    <LazyLoad offset={-115} height={'100%'}>
                        <TestimonialSlider />

                    </LazyLoad>
                </div>
                <LazyLoad height={100} offset={-115}>
                    <div className="Pop-in">
                        <h3>Who am I?</h3>
                        <div>
                            <p>
                                I am a self taught web applications engineer.
                            </p>
                            <p>
                            </p>
                        </div>
                    </div>
                </LazyLoad>
                <div className="margin-bottom-50"></div>
            </div>
        );
    }
}
export default HomePage;