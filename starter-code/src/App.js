import React, { Component } from 'react';
import './App.css';
import "./SideBar.css";
import CountryDetail from "./CountryDetail";
import countries from "./countries.json";
import {BrowserRouter, Route, Router, Link } from 'react-router-dom';

class App extends Component {
  // Setting the state of the app
  state = {
    countries: countries
  }
  render() {
   
    console.log(countries);

    // Do things before we return
   let SideBar = this.state.countries.map((country, index)=> {
     return(
       <li><Link to={`/details/${country.cca3}`}>{country.name.common}</Link></li>
     )})
      
     
    // Returning what we want the user to see.
    return (
      <div className="App">
        <div className="SideBar">
          <ul>
            {SideBar}
          </ul>
        </div>
            <Route exact path="/details/:countryId" component={CountryDetail} />
      </div>
      
   
    );
  }
}

export default App;
