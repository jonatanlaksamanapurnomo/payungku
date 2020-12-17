import React from 'react';
import "./weather.css";
import { normalizeWeatherCode } from "../utill/filter";

const Weathercard = (props) => {
    const capitalizeEachWord = (words) => {
        let separateWord = words.toLowerCase().split(' ');
        for (let i = 0; i < separateWord.length; i++) {
            separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
                separateWord[i].substring(1);
        }
        return separateWord.join(' ');
    }

    let { description, child } = props.data
    let weatherList = null;
    let temperatureList = null;
    child.forEach(element => {
        try {
            if (element.attributes.id === "weather") {
                weatherList = element.children
            }
            if (element.attributes.id === "t") {
                temperatureList = element.children
            }
        }
        catch (err) {
            console.log("Data tidak valid")
        }
    });
    let currentWeather, currentWeatherIcon, currentWeatherName, currentTemp = null
    try {
         currentWeather = normalizeWeatherCode(weatherList[0].children[0].value)
         currentWeatherIcon = currentWeather.url
         currentWeatherName = currentWeather.name
         currentTemp = temperatureList[0].children[0].value
    }
    catch (err) {
        console.log("Data tidak valid")
    }

    return (<div className="card mx-0  "><span className="icon"><img alt="" className="img-fluid"
        src={currentWeatherIcon} /></span>
        <div className="title">
            <p>{capitalizeEachWord(description)}</p>
        </div>
        <div className="temp">{currentTemp}<sup>&deg;</sup>C</div>
        <div className="row">
            <div className="col-4">
                <div className="header">General</div>
                <div className="value">{currentWeatherName}</div>
            </div>
            <div className="col-4">
                <div className="header">Air pollution</div>
                <div className="value">47</div>
            </div>
            <div className="col-4">
                <div className="header">Fire</div>
                <div className="value">No</div>
            </div>
        </div>
    </div>);

};

export default Weathercard;