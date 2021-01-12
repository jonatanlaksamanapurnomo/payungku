import React, {useState} from 'react';
import {Collapse} from 'reactstrap';
import "./weather.css";
import {normalizeWeatherCode} from "../utill/filter";
import {Link} from "react-router-dom";

const Weathercard = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const capitalizeEachWord = (words) => {
        let separateWord = words.toLowerCase().split(' ');
        for (let i = 0; i < separateWord.length; i++) {
            separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
                separateWord[i].substring(1);
        }
        return separateWord.join(' ');
    }

    let {description, child, lat, long} = props.data
    let weatherList = null;
    let temperatureList = null;
    let humidList = null;
    let windSpdList = null;
    let windDirList = null;
    child.forEach(element => {
        try {
            if (element.attributes.id === "weather") {
                weatherList = element.children
            }
            if (element.attributes.id === "t") {
                temperatureList = element.children
            }
            if (element.attributes.id === "hu"){
                humidList = element.children
            }
            if (element.attributes.id === "ws"){
                windSpdList = element.children
            }
            if (element.attributes.id === "wd"){
                windDirList = element.children
            }
        } catch (err) {
            console.log("Data tidak valid")
        }
    });
    let currentWeather, currentWeatherIcon, currentWeatherName, currentTemp, currentHum,
    windSpd, windDirDeg, windDirName = null
    try {
        currentTemp = temperatureList[0].children[0].value
        currentWeather = normalizeWeatherCode(weatherList[0].children[0].value)
        currentWeatherIcon = currentWeather.url
        currentWeatherName = currentWeather.name
        currentHum = humidList[0].children[0].value
        windSpd = windSpdList[0].children[2].value
        windDirDeg = windDirList[0].children[0].value
        windDirName = windDirList[0].children[1].value
        if(windDirName==="VARIABLE"){
            //hide, change to unavailable.
        }
    } catch (err) {
        console.log("Data tidak valid")
        return null;
    }

    return (
        <div onClick={toggle} className="card mx-0  "><span className="icon"><img alt="" className="img-fluid"
                                                                                  src={currentWeatherIcon}/></span>
            <div className="title">
                <p>{capitalizeEachWord(description)}</p>
            </div>
            <div className="temp mb-0">{currentTemp}<sup>&deg;</sup>C</div>
            <h6 className="text-center mb-4">{currentWeatherName}</h6>
            <div className="row">
                <div className="col-4">
                    <div className="header">Kelembaban</div>
                    <div className="value">{currentHum}%</div>
                </div>
                <div className="col-4">
                    <div className="header">Kec. Angin</div>
                    <div className="value">{windSpd} km/h</div>
                </div>
                <div className="col-4">
                    <div className="header">Arah Angin</div>
                    <div className="value">{windDirName}&emsp;<img style={{transform: "rotate("+windDirDeg+"deg)"}} height="16px" width="16px" src={process.env.PUBLIC_URL + '/compass.png'} /> </div>
                </div>
            </div>
            <hr></hr>
            <div className="row mt-1 justify-content-around">
                <div className="col-2 px-0">
                    00.00<br></br>
                    {temperatureList[0].children[0].value}<sup>&deg;</sup>C
                </div>
                <div className="col-2 px-0">
                    06.00<br></br>
                    {temperatureList[1].children[0].value}<sup>&deg;</sup>C
                </div>
                <div className="col-2 px-0">
                    12.00<br></br>
                    {temperatureList[2].children[0].value}<sup>&deg;</sup>C
                </div>
                <div className="col-2 px-0">
                    18.00<br></br>
                    {temperatureList[3].children[0].value}<sup>&deg;</sup>C
                </div>
                <div className="col-2 px-0">
                    24.00<br></br>
                    {temperatureList[4].children[0].value}<sup>&deg;</sup>C
                </div>
            </div>
            <Collapse isOpen={isOpen}>
                <div id="example-collapse-text">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                    terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                    labore wes anderson cred nesciunt sapiente ea proident.

                    <Link to={{
                        pathname: `/detail/${capitalizeEachWord(description)}`,
                        state: {lat: lat, long: long},
                    }}> See Detail </Link>
                </div>
            </Collapse>
        </div>);

};

export default Weathercard;