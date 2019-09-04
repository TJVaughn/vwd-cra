//REQUIRED FUNCTIONS IMPORT
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Switch } from 'react-router-dom';
import loadable from '@loadable/component';
//STYLES IMPORT
import './styles/NavbarRouter.scss';
import './styles/FeaturedImage.scss';
import './styles/HomePage.scss';
import './styles/About.scss';
import './styles/Portfolio.scss';

//IMAGES IMPORT 
// const SiteLogo = loadable(() => import('../images/vwd-logo.png'));
import SiteLogo from './images/vwd-logo-500.png';
import nedOImg from './images/ned-officials-blank.png';
import ttlImg from './images/ttl-blank.png';
// import FeaturedImg from '../images/code-cloud-v1.png';
//COMPONENTS IMPORT
const HomePage = loadable(() => import('./paths/HomePage'), {fallback: "Loading Content"});
const AboutPage = loadable(() => import('./paths/AboutPage'), {fallback: "Loading Content"});
const PortfolioPage = loadable(() => import('./paths/PortfolioPage'), {fallback: "Loading Content"});
const FeaturedImg = loadable(() => import('./components/FeaturedImg'));
const PortfolioSiteContainer = loadable(() => import('./paths/PortfolioSiteContainer'));

//END IMPORTS

function IndexRouter() {
  return(
      <div>
          <FeaturedImg pageTitle="Take your business to the next level" />
          <HomePage />
      </div>
  );
}
function AboutRouter() {
  return(
        <div>
          <FeaturedImg pageTitle="About Me" />
          <AboutPage />
        </div>
  );
}

function PortfolioRouter(){
    return (
        <div>
          <FeaturedImg pageTitle="Portfolio" />
          
          <PortfolioPage />
        </div>
    );
}
function NedOfficialsRouter(){
  return(
    <div>
      <FeaturedImg pageTitle="NED Officials" />
      <PortfolioSiteContainer 
        pageTitle="NED Officials"
        pageSubtitle="Bringing New England Ice Hockey officials together"
        thumbnail={nedOImg}
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
    </div>
  )
}
function TTLRouter(){
  return(
    <div>
      <FeaturedImg pageTitle="Transformation Through Love" />
      <PortfolioSiteContainer 
        pageTitle="Transformation Through Love"
        pageSubtitle="Mindfulness + Yoga Workshops + Mentoring"
        thumbnail={ttlImg}
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
    </div>
  )
}
const navbarRoutesArray = [
  {path: '/about/', component: AboutRouter},
  {path: '/portfolio/', component: PortfolioRouter},
  {path: '/nedofficials/', component: NedOfficialsRouter},
  {path: '/transformation-through-love', component: TTLRouter}
]
const navbarRoutesMap = navbarRoutesArray.map(item => 
  <Route key={`${item.component}-${item.path}`} path={item.path} component={item.component} />
);

const navbarItemsArray = [
  {to: "/", text: "Home"},
  {to: "/about/", text: "About"},
  {to: "/portfolio/", text: "Portfolio"}
];
const navbarItemsMap = navbarItemsArray.map(item =>
    <Link key={`navbar-key-${item.text}`} className="NavbarRouter-nav-item" to={item.to}>{item.text}</Link>
)

class AppRouter extends Component {
  constructor(props){
    super(props);
    this.state = {
      navMenuBtn: false,
    }
    this.navStateHandler = this.navStateHandler.bind(this);
    this.navStateLogoHandler = this.navStateLogoHandler.bind(this);
  }
  navStateHandler(){
    if(!this.state.navMenuBtn){
      this.setState({navMenuBtn: true});
    } else {
      this.setState({navMenuBtn: false});
    }
  }
  navStateLogoHandler(){
    if(this.state.navMenuBtn){
      this.setState({navMenuBtn: false})
    }
  }

  render(){
    return (
      <Router>
        <div className="NavbarRouter">
          <nav className="NavbarRouter-nav Margin-div">
            <div>
              <Link onClick={this.navStateLogoHandler} to="/">
                <img id="Navbar-logo" className="NavbarRouter-nav-img" src={SiteLogo} alt="Vaughn Web Development" />
              </Link>
            </div>
            
            
            <div>
              <div className="NavbarRouter-nav-button" onClick={this.navStateHandler}>
                {this.state.navMenuBtn
                ? <div>
                  <div className="NavbarRouter-nav-button-close-line"></div>
                  <div className="NavbarRouter-nav-button-close-line-2"></div>
                  <div className="NavbarRouter-nav-button-close-line-3"></div>
                </div>
                : <div>
                  <div className="NavbarRouter-nav-button-line"></div>
                  <div className="NavbarRouter-nav-button-line"></div>
                  <div className="NavbarRouter-nav-button-line"></div>
                </div>
                }

              </div>
            </div>
          </nav>
          <div className="">
            {this.state.navMenuBtn
            ? <div className="NavbarRouter-nav-items-container" onClick={this.navStateHandler}>
                {navbarItemsMap}
              </div>
            : <div></div>
            }
          </div>
                 
  
          <Switch>
            <Route path="/" exact component={IndexRouter} />
            {navbarRoutesMap}
          </Switch>
        </div>
      </Router>
    );
  }
 
}

export default AppRouter;
