import React, { Component } from 'react';
import Routes from './Routes'

class Home extends Component {
  // calls the login method in authentication service
  login = () => {
    this.props.auth.login();
  }
  // calls the logout method in authentication service
  logout = () => {
    this.props.auth.logout();
  }
  render() {
    // calls the isAuthenticated method in authentication service
    const { isAuthenticated } = this.props.auth;
    return (
      <div>
        {
          isAuthenticated() &&
          <div className="container column">
            <h3>
              <a
                style={{ cursor: 'pointer', color: 'black',marginLeft: '1690px' }}
                onClick={this.logout}
              >
                Log Out
              </a>
            </h3>
            <Routes />
          </div>
        }
        {
          !isAuthenticated() && (
            <div className="container column">
              <h3>
              <header className="App-header">
              <h1 style={{marginLeft:'700px'}}>To-Unalive List</h1>
              <a
                  style={{ cursor: 'pointer', color: 'white'}}
                  onClick={this.login}
                >
                  Log In
                </a>
            </header>
              </h3>
            </div>
          )
        }
      </div>
      );
    }
  }

  export default Home;