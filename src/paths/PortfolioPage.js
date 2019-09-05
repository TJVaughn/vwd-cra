import React, { Component } from 'react';
import PortfolioSites from '../components/PortfolioSites';
import LazyLoad from 'react-lazyload';
import ContactCard from '../components/ContactCard';
class PortfolioPage extends Component{
    render(){
        return(
            <div className="Margin-div">
                <h2>Client Sites:</h2>
                <PortfolioSites />
                <LazyLoad offset={-115} height={100} once>
                    <ContactCard />
                </LazyLoad>
                <div className="margin-bottom-50"></div>

            </div>
        );
    }
}
export default PortfolioPage;