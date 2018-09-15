import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import MemberContainer from './MemberContainer';

const HelloWorld = () => (
  <div style={{display:'flex', flexDirection:'column', justifyContent:'space-around'}}>
    <h3>Login</h3>
    <input placeholder='Username'></input>
    <input placeholder='Password'></input>
    <button>Login</button>
    <span>Don't have an account yet?</span>
    <button>Register here!</button>
  </div>
);


class App extends Component {
  render() {
    return (
      <div className='container'>
        <Router>
          <div>
            <Route exact path='/' component={MemberContainer}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default connect()(App);
