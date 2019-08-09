import React, { Component } from 'react';
import './App.css';
import "./SideBar.css";
import CountryDetail from "./CountryDetail";
import {BrowserRouter, Route, Router, Link } from 'react-router-dom';
import axios from 'axios';

class App extends Component {
  // Setting the state of the app
  state = {
        countries: []
  }
  
  // Getting data from after first render
  componentDidMount() {
      axios.get("https://countries.tech-savvy.tech/countries")
      .then(response => {
          this.setState({countries: response.data})
      })

      .catch(error => {
        console.log(error)
      })
  }

  render() {
    // Do things before we return
   let SideBar = this.state.countries.map((country, index)=> {
     return(
       <li><Link to={`/details/${country.cca3}`}><span>{country.flag}</span>{country.name.common}</Link></li>
     )})
      
    // Returning what we want the user to see.
    return (
      <div className="App">
        <div className="SideBar"s>
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
