import React, { Component } from 'react';
import nedOImg from '../images/ned-officials.png';
import ttlImg from '../images/ttl.png';

const portfolioItemsArray = [
    {
        title: "NED Officials",
        link: "https://nedofficials.com/",
        desc: "Built from scratch to connect New England Hockey Officials!",
        img: nedOImg
    },
    {
        title: "Transformation Through Love",
        link: "https://transformationthroughlove.com/",
        desc: "Revamped website to bring mindfulness to more people in a more accessible way!",
        img: ttlImg
    }
]

class PortfolioSites extends Component {
    portfolioItemsMap = portfolioItemsArray.map(item => 
        <div className="Portfolio-items-inner" key={`${item.title}-${item[item]}`}>
            <a className="Portfolio-items-link" href={item.link} rel="noreferrer noopener" target="_blank">
                <img className="Portfolio-items-img" src={item.img} alt={item.title} />
            </a>

                <div className="Portfolio-items-text">
                    <h3>{item.title}</h3>
                    {item.desc}
                </div>
        </div>
        )

    render(){
    	return(
    		<div className="Portfolio-items-container">
                    {this.portfolioItemsMap}
    		</div>
    	);
    }
}
export default PortfolioSites ;