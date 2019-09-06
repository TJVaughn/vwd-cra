import React, { Component } from 'react';

class ContactCard extends Component {
    static defaultProps = {
        emailText: <div>Email me at <br />VaughnWebDev @gmail.com</div>,
        phoneText: <div>Call or text me at <br />(203) 200-7479</div>
    }
    render(){
    	return(
    		<div>
                <h3>Contact</h3>
    			<div className="Contact-card-container Pop-in">
                    <a className="Contact-card" href="mailto:vaughnwebdev@gmail.com">{this.props.emailText}</a>
                    <a className="Contact-card" href="tel:2032007479">{this.props.phoneText}</a>
                </div>
    		</div>
    	);
    }
}
export default ContactCard ;