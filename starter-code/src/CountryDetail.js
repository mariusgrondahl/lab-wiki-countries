import React from "react";
import "./CountryDetail.css";
import {BrowserRouter, Route, Router, Link } from 'react-router-dom';
import countries from "./countries.json";


function CountryDetail (props) {
    // Getting one country from URL Params
    const getCountry = (id) => {
        let found = countries.find(oneCountry => {
          return oneCountry.cca3 === id;
        })
        // Returning the country we found based on the id
        return found;
    };

    const params = props.match.params;
    let foundCountry = getCountry(params.countryId)

    return(
        
        <div className="CountryDetail">
           
            <h1>{foundCountry.name.common}</h1>
            <h5>Capital:{foundCountry.capital}</h5>
            <span>Area: {foundCountry.area}</span>
            <h5>Bordering countries:</h5>
            <ul>{foundCountry.capital}</ul>
      </div>
    )
}

export default CountryDetail;


