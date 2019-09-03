//REQUIRED FUNCTIONS IMPORT
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Switch } from 'react-router-dom';
import loadable from '@loadable/component';
//STYLES IMPORT
import '../styles/NavbarRouter.scss';
import '../styles/FeaturedImage.scss';
import '../styles/HomePage.scss';
//IMAGES IMPORT 
// const SiteLogo = loadable(() => import('../images/vwd-logo.png'));
import SiteLogo from '../images/vwd-logo-500.png';
// import FeaturedImg from '../images/code-cloud-v1.png';
//COMPONENTS IMPORT
const HomePage = loadable(() => import('./HomePage'), {fallback: "Loading Content"});
const AboutPage = loadable(() => import('./AboutPage'), {fallback: "Loading Content"});
const PortfolioPage = loadable(() => import('./PortfolioPage'), {fallback: "Loading Content"});
const FeaturedImg = loadable(() => import('./FeaturedImg'));
const NedOfficialsPage = loadable(() => import('./NedOfficialsPage'));
const TTLPage = loadable(() => import('./TTLPage'));

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
          <FeaturedImg pageTitle="About" />
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
      <NedOfficialsPage />
    </div>
  )
}
function TTLRouter(){
  return(
    <div>
      <FeaturedImg pageTitle="Transformation Through Love" />
      <TTLPage />
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
  {id: 0, to: "/", text: "Home"},
  {id: 1, to: "/about/", text: "About"},
  {id: 2, to: "/portfolio/", text: "Portfolio"}
];
const navbarItemsMap = navbarItemsArray.map(item =>
  <p key={`navbar-item-${item.id}`} className="NavbarRouter-nav-item">
    <Link className="NavbarRouter-nav-item-text" to={item.to}>{item.text}</Link>
  </p>
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
          <div className="Margin-div">
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
