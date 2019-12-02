import React, {Component} from 'react';
import PortfolioSiteContainer from '../paths/PortfolioSiteContainer';
import nedOImg from '../images/ned-officials-blank.png';
import ttlImg from '../images/ttl-blank.png';
import weatherAppImg from '../images/whether-app.png'



class NEDOfficialsContent extends Component {
  render(){
    return(
        <PortfolioSiteContainer 
        pageTitle="NED Officials"
        pageSubtitle="Bringing New England Ice Hockey officials together"
        thumbnail={nedOImg}
        imgLink="https://nedofficials.com"
        testimonial={
        <div>
          <p>
          "Incredible thanks to Trevor, who in 1 week, 
          produced what the [OMITTED] vendor could not do in 8 weeks (and 13 teleconferences)"  
          </p>
        </div>
        }
        testimonialAuthor="Barry Z"
        pageAbout={
        <div>
          <ul>
            <li>Built from scratch</li>
            <li>Has public and private content</li>
            <li>User only area</li>
            <li>Subscriber of our "Monthly maintenance and hosting" plan!</li>
          </ul>
        </div>}
      />
    );
  }
};

class TTLContent extends Component {
  render(){
    return(
      <PortfolioSiteContainer 
        pageTitle="Transformation Through Love"
        pageSubtitle="Mindfulness + Yoga Workshops + Mentoring"
        thumbnail={ttlImg}
        imgLink="https://transformationthroughlove.com"
        testimonial={
          <div>
            <p>
              "I used to struggle with my website (formatting, updating, getting it to look and work the way I want it to). 
            </p>
            <p>
              Having Trevor take the reins on it has 
              <strong> made my life easier and my online business more streamlined and able to flourish</strong>. 
            </p>
            <p>
              He is patient, knowledgeable, diligent, and a pleasure to work with. <br />
              I highly recommend him to anyone looking for website help that wants to work with someone trustworthy, 
              caring, and conscientious!"
            </p>
          </div>
          }
          testimonialAuthor="JoAnna N"
        pageAbout={
          <div>
            <ul>
              <li>Revamped using WordPress</li>
              <li>Blog</li>
              <li>Has public and private content</li>
              <li>On our "Everything up to date" plan!</li>
            </ul>
          </div>
        }
      />
    );
  }

}

class WhetherAppContent extends Component {
  render(){
    return (
      <div>
        <PortfolioSiteContainer 
          pageTitle="WhetherApp"
          pageSubtitle="Find out whether you want to go outside or not!"
          thumbnail={weatherAppImg}
          imgLink="https://tjvaughn-weather.herokuapp.com/"
          pageAbout={<div>
              <p>I built this weather application using Node.js, and Express.js on the back end, and React.js on the 
          front end.</p>
          <p>The details:</p>
          Using Express, I built a RESTful API which:
          <ul>
              <li>Takes in a search term</li>
              <li>Returns the latitude and longitude values to a callback function</li>
              <li>Which then gets all the JSON data using the Darksky API</li>
              <li>Which then populates the JSON end point at /weather</li>
              <li>Then, on the front end, I fetch the data from the end point with either the search term, or 
                  the cookie data if the cookie is not empty
              </li>
              <li>Finally, the data is passed into arrays, which can then be rendered</li>
          </ul>
          <p>
              You can check out the code at
              <a href="https://github.com/TJVaughn/ern-weather" target="_blank" rel="noopener noreferrer"> github.com </a>
              and the application at
              <a href="https://tjvaughn-weather.herokuapp.com/" target="_blank" rel="noopener noreferrer"> whetherapp.co </a>
          </p>
          </div>}
          testimonial={<p>"Get all your weather data quickly and easily!"</p>}
      />
      </div>
    )
  }
}

export { NEDOfficialsContent, TTLContent, WhetherAppContent };