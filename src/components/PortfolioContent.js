import React, {Component} from 'react';
import PortfolioSiteContainer from '../paths/PortfolioSiteContainer';
import nedOImg from '../images/ned-officials-blank.png';
import ttlImg from '../images/ttl-blank.png';


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

export { NEDOfficialsContent, TTLContent };