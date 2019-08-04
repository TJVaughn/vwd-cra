//REQUIRED FUNCTIONS IMPORT
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//COMPONENTS IMPORT
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import PortfolioPage from './PortfolioPage';
//STYLES IMPORT

//END IMPORTS
function IndexRouter() {
  return(
      <div>
          <HomePage />
      </div>
  );
}

function AboutRouter() {
  return(
        <div>
            <AboutPage />
        </div>
  );
}

function PortfolioRouter(){
    return (
        <div>
            <PortfolioPage />
        </div>
    );
}
// function Users() {
//   return <h2>Users</h2>;
// }

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/portfolio/">Portfolio</Link>
            </li>
            {/* <li>
              <Link to="/users/">Users</Link>
            </li> */}
          </ul>
        </nav>

        <Route path="/" exact component={IndexRouter} />
        <Route path="/about/" component={AboutRouter} />
        <Route path="/portfolio/" component={PortfolioRouter} />
        {/* <Route path="/users/" component={Users} /> */}
      </div>
    </Router>
  );
}

export default AppRouter;
