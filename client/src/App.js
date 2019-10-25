import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Player from './components/Player';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="cover">
            <div className="col-md-8 col-10 mx-auto mt-3 p-0">
              <Header />

              <Switch>
                <Route path="/" exact component={Search} />
                <Route path="/player/:playerName" component={Player} />
              </Switch>

            </div>
          </div>
        </div>
      </BrowserRouter >
    );
  }
}

export default App;
