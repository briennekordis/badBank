import React from "react";
import "./navbar.css";
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
              <Link to="/" className="navbar-brand">badBank</Link>
              {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button> */}
              <div  id="navbarNav">
                <ul className="navbar-nav">
                  <li id="nav1" className="nav-item"><Link className="nav-link" title="Create an account to use badBank." to="/createAccount">Create Account</Link></li>
                  <li id="nav2" className="nav-item"><Link className="nav-link" title="Make a deposit into your account." to="/deposit">Deposit</Link></li>
                  <li id="nav3" className="nav-item"><Link className="nav-link" title="Make a withdrawl from your account." to="/withdraw">Withdraw</Link></li>
                  <li id="nav4" className="nav-item"><Link className="nav-link" title="View all of your transactions." to="/alldata">All Data</Link></li>
                </ul> 
              </div>
            </nav>
          );
    }
}

export default NavBar;