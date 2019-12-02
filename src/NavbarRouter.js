//REQUIRED FUNCTIONS IMPORT
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Switch } from 'react-router-dom';
import loadable from '@loadable/component';
import ReactGA from 'react-ga';
// import LazyLoad from 'react-lazyload';
//STYLES IMPORT
import './styles/NavbarRouter.scss';
import './styles/FeaturedImage.scss';
import './styles/HomePage.scss';
import './styles/About.scss';
import './styles/Portfolio.scss';
import './styles/Footer.scss';

import { NEDOfficialsContent, TTLContent, WhetherAppContent } from './components/PortfolioContent';
//IMAGES IMPORT 
// const SiteLogo = loadable(() => import('../images/vwd-logo.png'));
import SiteLogo from './images/vwd-logo-500.png';
// import FeaturedImg from '../images/code-cloud-v1.png';
//COMPONENTS IMPORT
const HomePage = loadable(() => import('./paths/HomePage'), {fallback: "Loading Content"});
const AboutPage = loadable(() => import('./paths/AboutPage'), {fallback: "Loading Content"});
const PortfolioPage = loadable(() => import('./paths/PortfolioPage'), {fallback: "Loading Content"});
const FeaturedImg = loadable(() => import('./components/FeaturedImg'));
// const PortfolioSiteContainer = loadable(() => import('./paths/PortfolioSiteContainer'));
const Footer = loadable(() => import('./components/Footer'));



//END IMPORTS
ReactGA.initialize('UA-136509113-1');
ReactGA.pageview(window.location.pathname + window.location.search);

function IndexRouter() {
  return(
      <div>
          <FeaturedImg pageTitle="Take your website to the next level" />
          <HomePage />
          <Footer />
      </div>
  );
}
function AboutRouter() {
  return(
        <div>
          <FeaturedImg pageTitle="About Me" />
          <AboutPage />
          <Footer />
        </div>
  );
}

function PortfolioRouter(){
    return (
        <div>
          <FeaturedImg pageTitle="Portfolio" />
          <PortfolioPage />
          <Footer />
        </div>
    );
}
function NedOfficialsRouter(){
  return(
    <div>
      <FeaturedImg pageTitle="NED Officials" />
      <NEDOfficialsContent />
      <Footer />
    </div>
  )
}
function TTLRouter(){
  return(
    <div>
      <FeaturedImg pageTitle="Transformation Through Love" />
      <TTLContent />
      <Footer />
    </div>
  )
}
function WhetherAppRouter(){
  return(
    <div>
      <FeaturedImg pageTitle="Whether App" />
      <WhetherAppContent />
      <Footer />
    </div>
  )
}
const navbarRoutesArray = [
  {path: '/about/', component: AboutRouter},
  {path: '/portfolio/', component: PortfolioRouter},
  {path: '/nedofficials/', component: NedOfficialsRouter},
  {path: '/transformation-through-love/', component: TTLRouter},
  {path: '/whetherapp/', component: WhetherAppRouter}
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
