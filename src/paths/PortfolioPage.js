import React, { Component } from 'react';
import PortfolioSites from '../components/PortfolioSites';

class PortfolioPage extends Component{
    render(){
        return(
            <div className="Margin-div">
                <h2>Client Sites:</h2>
                <PortfolioSites />
                <div className="margin-bottom-50"></div>

            </div>
        );
    }
}
export default PortfolioPage;