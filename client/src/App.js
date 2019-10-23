import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';

class App extends Component {
  render() {

    return (
      <div className="App" >
        <div className="cover">
          <div className="col-md-6 col-10 mx-auto">
            <Header />
            <Search />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
