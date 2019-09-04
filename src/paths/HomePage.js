import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import TestimonialSlider from '../components/TestimonialSlider';
import BackToTop from '../components/BackToTop';
import PortfolioSites from '../components/PortfolioSites';

class HomePage extends Component{
    render(){
        return(
            <div className="HomePage Margin-div">
                <h2>
                    Whatever you need out of your website, I am here to help you succeed!
                </h2>
                <BackToTop />
                <LazyLoad once height={100} offset={-100}>
                    <div className="Fade-in">
                        <p>
                            Owning a website can be so many things! You can use it to help the world, and you can also use it 
                            to put a little money in your pocket!
                        </p>
                        
                    </div>
                </LazyLoad>
                <div>
                    <LazyLoad offset={-115} height={'100%'}>
                        <TestimonialSlider />
                    </LazyLoad>
                </div>

                {/* AFTER THE FOLD */}
                <LazyLoad once height={100} offset={-115}>
                    <div className="Fade-in">
                        <h2>The Results</h2>
                        <PortfolioSites />
                    </div>
                </LazyLoad>
                
                
                <LazyLoad height={100} offset={-115}>
                    <div className="Pop-in">
                        <a className="Contact-card" href="mailto:vaughnwebdev@gmail.com">Contact me at vaughnwebdev@gmail.com</a>
                    </div>
                </LazyLoad>
                <div className="margin-bottom-50"></div>
            </div>
        );
    }
}
export default HomePage;