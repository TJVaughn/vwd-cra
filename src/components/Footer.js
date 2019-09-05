import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const allPagesArray = [
	{text: "Home", path: '/'},
	{text: "About", path: '/about/'},
	{text: "Portfolio", path: '/portfolio/'},
	{text: "NED Officials", path: '/nedofficials/'},
	{text: "Transformation Through Love", path: '/transformation-through-love/'}
];

class Footer extends Component {

	allPagesMap = allPagesArray.map(item => 
		<div key={`all-pages-map-${item.text}`} className="Footer-links">
			<Link to={item.path}>
				{item.text}
			</Link>
		</div>
		)

    render(){
    	return(
    		<div className="Footer Align-center">
    			<div className="Footer-div">
					<h3>Contact</h3>
					<div>Trevor J Vaughn Hauck</div>
					<div>Owner/Operator</div>
					<div>Vaughn Web Development</div>
					<div><a href="mailto:Vaughnwebdev@gmail.com">VaughnWebDev @gmail.com</a></div>
					<div><a href="tel:2032007479">(203)200-7479</a></div>
					<div>Stamford, CT</div>
					<div className="margin-bottom-50"></div>

				</div>
				<div className="Footer-div">
					<h3>All Pages</h3>
					{this.allPagesMap}
				</div>
				<div>Vaughn Web Development %copy 2019</div>

    		</div>
    	);
    }
}
export default Footer ;