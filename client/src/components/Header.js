import React, { Component } from 'react';
import '../App.css';
import logo from '../assets/pubg-logo.png';

class Header extends Component {
  render() {
    return (
      <div className="mt-3 p-0">
        <img className="logoSize" src={logo} alt="PUBG Logo" />
      </div>
    )
  }
}

export default Header;
