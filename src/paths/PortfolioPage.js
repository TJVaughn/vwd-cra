import React, { Component } from 'react';
import PortfolioSites from '../components/PortfolioSites';
import ContactCard from '../components/ContactCard';

class PortfolioPage extends Component{
    render(){
        return(
            <div className="Margin-div">
                <h2>Client Sites:</h2>
                <PortfolioSites />
                <ContactCard />
                <div className="margin-bottom-50"></div>

            </div>
        );
    }
}
export default PortfolioPage;