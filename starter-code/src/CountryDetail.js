import React from "react";
import "./CountryDetail.css";
import { Link } from 'react-router-dom';
import countries from "./countries.json";
import axios from 'axios';


function CountryDetail (props) {
    // Getting one country from URL Params
    const getCountry = (id) => {
        let found = countries.find(oneCountry => {
            //Returning the country that matches the params CCA3-code
            return oneCountry.cca3 === id;
        })
        // Returning the country we found based on the id
        return found;
    };

    const params = props.match.params;
    let foundCountry = getCountry(params.countryId)

    //Setting up bordering countries
    let countryBorders = getCountry(params.countryId).borders;

    //Mapping bordering countries an creating List with Link
    let countryBordersList = countryBorders.map(function(item) {
        // Retrieving the Country that matches the item
        let borderLinks = getCountry(item).cca3
         return (
            <li><Link to={`/details/${borderLinks}`}>{item}</Link></li>
         )
      });



    return(
        <div className="CountryDetail">
            <span>{foundCountry.flag}</span>
            <h1>{foundCountry.name.common}</h1>
            <h5>Capital:{foundCountry.capital}</h5>
            <span>Area: {foundCountry.area} m2</span>
            <h5>Bordering countries:</h5>


            <ul>
            {countryBordersList}
            </ul>
      </div>
    )
}

export default CountryDetail;


