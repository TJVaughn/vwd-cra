import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import ContactCard from '../components/ContactCard';

class NedOfficialsPage extends Component {
		static defaultProps = {
			pageTitle: '',
			pageSubtitle: '',
			thumbnail: '',
			pageAbout: '',
			testimonial: '',
			testimonialAuthor: '',
			imgLink: '#'
		}
	
    render(){
    	return(
    		<div className="Portfolio-site-container Margin-div">
    			<h2 className="Portfolio-site-container-title">{this.props.pageTitle}</h2>
				<h3 className="Portfolio-site-container-subtitle">{this.props.pageSubtitle}</h3>
				<a href={this.props.imgLink} target="_blank" rel="noopener noreferrer">
					<img className="Portfolio-site-container-img" src={this.props.thumbnail} alt={this.props.pageTitle} />
				</a>
				
				<p className="Portfolio-testimonial">
					{this.props.testimonial}
					<strong> {this.props.testimonialAuthor}</strong>
				</p>
				<p>
					About the site:
				</p>
				<p>
					{this.props.pageAbout}
				</p>
				<LazyLoad offset={-115} height={100} once>
                    <ContactCard />
                </LazyLoad>
                <div className="margin-bottom-50"></div>

    		</div>
    	);
    }
}
export default NedOfficialsPage ;