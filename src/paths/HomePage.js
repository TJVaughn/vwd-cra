import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import TestimonialSlider from '../components/TestimonialSlider';
import BackToTop from '../components/BackToTop';
import PortfolioSites from '../components/PortfolioSites';
import ContactCard from '../components/ContactCard';

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
                            Building a website, and developing it's presence can be quite an undertaking, but you don't have to 
                            do it alone!
                        </p>
                        
                    </div>
                </LazyLoad>
                <div>
                    <h3>Testimonials</h3>
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
                <LazyLoad offset={-110} height={100}>
                    <ContactCard />
                </LazyLoad>
                <div className="margin-bottom-50"></div>
            </div>
        );
    }
}
export default HomePage;