import React, { Component } from 'react';
import ContactCard from '../components/ContactCard'; 

class NedOfficialsPage extends Component {
		static defaultProps = {
			pageTitle: '',
			pageSubtitle: '',
			thumbnail: '',
			pageAbout: ''
		}
	
    render(){
    	return(
    		<div className="Portfolio-site-container Margin-div">
    			<h2 className="Portfolio-site-container-title">{this.props.pageTitle}</h2>
				<h3 className="Portfolio-site-container-subtitle">{this.props.pageSubtitle}</h3>
				<img className="Portfolio-site-container-img" src={this.props.thumbnail} alt={this.props.pageTitle} />
				<p>
					About the site:
				</p>
				<p>
					{this.props.pageAbout}
				</p>
				<ContactCard />
    		</div>
    	);
    }
}
export default NedOfficialsPage ;