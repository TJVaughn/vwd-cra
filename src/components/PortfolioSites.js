import React, { Component } from 'react';
import nedOImg from '../images/ned-officials.png';
import ttlImg from '../images/ttl.png';
import { Link } from 'react-router-dom';


const portfolioItemsArray = [
    {
        title: "NED Officials",
        link: "https://nedofficials.com/",
        desc: "Built from scratch to connect New England Hockey Officials!",
        img: nedOImg,
        to: "/nedofficials/"

    },
    {
        title: "Transformation Through Love",
        link: "https://transformationthroughlove.com/",
        desc: "Revamped website to bring mindfulness to more people in a more accessible way!",
        img: ttlImg,
        to: "/transformation-through-love/"
    }
]

class PortfolioSites extends Component {
    portfolioItemsMap = portfolioItemsArray.map(item => 
        <div className="Portfolio-items-inner" key={`${item.title}-${item[item]}`}>
            <div className="Portfolio-items-text">
                    <h3>{item.title}</h3>
                    {item.desc}
                </div>
                <Link className="" to={item.to}>
                    <img className="Portfolio-items-img" src={item.img} alt={item.title} />
                </Link>        
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