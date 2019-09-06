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
                <h3 className="Align-center">I revamp, build, and maintain websites</h3>
                <BackToTop />
                <div className="About-me Fade-in">
                    <LazyLoad once height={'50%'} offset={-125}>
                            <img className="Profile-pic" src={profilePic} alt="Trevor J Vaughn Hauck" />
                    </LazyLoad>

                    <LazyLoad offset={-115} height={100}>
                        <div>
                            <h4>About Me:</h4>
                            <p>
                                I'm a self taught website developer. 
                                Being self taught requires great time management skills, focus, hard work, drive,
                                and conviction, among other attributes. 
                            </p>
                            <p>
                                My job as an ice hockey referee fostered within me quick decision making skills,
                                a long attention span, focus, self-assurance, detachment and an ability to stay 
                                calm under pressure.
                            </p>
                            <p>
                                I love making websites, and helping people achieve their goals. 
                            </p>
                            
                            
                        </div>
                    </LazyLoad>
                </div>
                <LazyLoad height={100} offset={-115}>
                    <p>If you're interested in working together, send me an email</p>
                </LazyLoad>
                <LazyLoad offset={-115} height={100} once>
                    <ContactCard />
                </LazyLoad>
                <div className="margin-bottom-50"></div>

            </div>
        );
    }
}
export default AboutPage;