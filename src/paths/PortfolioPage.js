import React, { Component } from 'react';
import PortfolioSites from '../components/PortfolioSites';
import LazyLoad from 'react-lazyload';
// import ContactCard from '../components/ContactCard';
class PortfolioPage extends Component{
    render(){
        return(
            <div className="Margin-div">
                <h2>Client Sites:</h2>
                <PortfolioSites />
                {/* <LazyLoad offset={-115} height={100} once>
                    <ContactCard />
                </LazyLoad> */}
                <LazyLoad height={100} offset={-115}>
                    <p>
                        An average website requires three jobs to go from idea, to reality: <br />
                        Design, development and deployment. 
                    </p>
                    <p>
                        If you were to hire a person for each of the three jobs, it would take longer and cost more money.
                    </p>
                    <p className="Fade-in">
                        But when working with me, I am able to do all of those things, quickly and efficiently!<br />
                        <strong> This saves you a lot of time, money and energy!</strong>
                    </p>
                </LazyLoad>
                <div className="margin-bottom-50"></div>

            </div>
        );
    }
}
export default PortfolioPage;