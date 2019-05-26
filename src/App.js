import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './App.css';
import Header from'./Header/Header';
import PrivacyPolicy from './Header/PrivacyPolicy'
import HomeContent from './Home/HomeContent';
import DashboardContent from './Dashboard/DashboardContent';

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <div className="App">
          <div className="row">
            <div className="col-12 main-header">
              <header>
                <PrivacyPolicy/>
                <Header/>
              </header>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
                <Route exact path="/" component={HomeContent}/>
                <Route path="/dashboard" component={DashboardContent}/>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;