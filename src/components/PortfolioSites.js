import React, { Component } from 'react';
import nedOImg from '../images/ned-officials.png';
import ttlImg from '../images/ttl-home-298.jpg';

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
        <div key={`${item.title}-${item[item]}`}>
            <h3>{item.title}</h3>
            <div>
                <a href={item.link}>
                <img src={item.img} alt={item.title} />
                </a>
                {item.desc}
            </div>
        </div>
        )

    render(){
    	return(
    		<div>
    			{this.portfolioItemsMap}
    		</div>
    	);
    }
}
export default PortfolioSites ;