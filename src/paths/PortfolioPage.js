import React, { Component } from 'react';
import PortfolioSites from '../components/PortfolioSites';
import LazyLoad from 'react-lazyload';

class PortfolioPage extends Component{
    render(){
        return(
            <div className="Margin-div">
                <h2>The Results:</h2>
                <PortfolioSites />
                {/* <LazyLoad offset={-115} height={100} once>
                    <ContactCard />
                </LazyLoad> */}
                <LazyLoad height={100} offset={-115}>
                    <div>
                        <h3>When building a website, I focus on 3 main things:</h3>
                        <div className="thirds-grid">
                            <div className="thirds-grid-item">
                                <h4>Speed</h4>
                                <p>A fast site means happy users</p>
                            </div>
                            <div className="thirds-grid-item">
                                <h4>Security:</h4>
                                <p>A secure site means everything on the internet</p>
                            </div>
                            <div className="thirds-grid-item">
                                <h4>Usability:</h4>
                                <p>An easy to use site keeps users coming back</p>
                            </div>
                        </div>
                        
                        
                        {/* An average website requires three jobs to go from idea, to reality: <br />
                        Design, development and deployment.  */}
                    </div>
                    {/* <p>
                        If you were to hire a person for each of the three jobs, it would take longer and cost more money.
                    </p> */}
                    {/* <p className="Fade-in">
                        But when working with me, I am able to do all of those things, quickly and efficiently!<br />
                        <strong> This saves you a lot of time, money and energy!</strong>
                    </p> */}
                </LazyLoad>
                <div className="margin-bottom-50"></div>

            </div>
        );
    }
}
export default PortfolioPage;