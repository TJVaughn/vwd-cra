import React, { Component } from 'react';

class ContactCard extends Component {
    static defaultProps = {
        emailText: "Email me at VaughnWebDev@gmail.com",
        phoneText: "Call me at (203)200-7479"
    }
    render(){
    	return(
    		<div>
    			<div className="Contact-card-container Pop-in">
                    <a className="Contact-card" href="mailto:vaughnwebdev@gmail.com">{this.props.emailText}</a>
                    <a className="Contact-card" href="tel:2032007479">{this.props.phoneText}</a>
                </div>
    		</div>
    	);
    }
}
export default ContactCard ;