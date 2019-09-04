import React, { Component } from 'react';
import profilePic from '../images/profile-pic.png';
import LazyLoad from 'react-lazyload';
import BackToTop from '../components/BackToTop';
import ContactCard from '../components/ContactCard';

class AboutPage extends Component{
    render(){
        return(
            <div className="Margin-div">
                <h2 className="Align-center">
                    Hi, I'm Trevor J Vaughn Hauck
                </h2>
                <BackToTop />
                <div className="About-me Fade-in">
                    <LazyLoad once height={'50%'} offset={-125}>
                            <img className="Profile-pic" src={profilePic} alt="Trevor J Vaughn Hauck" />
                    </LazyLoad>
                    <LazyLoad offset={-115} height={100}>
                        <div>
                            <p>
                                I've always been a jack of all trades.
                            </p>
                            <p>
                                There are some PROs and CONs to being a jack of all trades.
                            </p>
                            <p>
                                For example, I am not necessarily #1 at anything. But I am good at multiple things. 
                            </p>
                            <p>
                                <strong>I am versitile, responsive, and a fast learner!</strong>
                            </p>
                            <p>
                                An average website requires three jobs to go from idea, to reality: <br />
                                Design, development and deployment. 
                            </p>
                            <p>
                                If you were to hire a person for each of the three jobs, it would take longer and cost more money.
                            </p>
                            
                        </div>
                    </LazyLoad>
                </div>

                <LazyLoad height={100} offset={-115}>
                    <p className="Fade-in">
                        But when working with me, I am able to do all of those things, quickly and efficiently!<br />
                        <strong> This saves you a lot of time, money and energy!</strong>
                    </p>
                </LazyLoad>
                <LazyLoad height={100} offset={-115}>
                    <p>If you're interested in working together, send me an email</p>
                    <ContactCard  />
                </LazyLoad>
                <div className="margin-bottom-50"></div>

            </div>
        );
    }
}
export default AboutPage;