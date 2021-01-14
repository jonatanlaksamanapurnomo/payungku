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

    let {
        description, curHumidity, curTemp, curWindDir,
        curWindSpeed,
        temps,
        curWeather,
        index
    } = props.data
    // let weatherList = weathers;
    let temperatureList = temps;
    // let humidList = humids;
    // let windSpdList = windSpeeds;
    // let windDirList = windDirs;
    let currentWeather, currentWeatherIcon, currentWeatherName, currentTemp, currentHum,
        windSpd, windDirDeg, windDirName = null
    try {
        currentTemp = curTemp
        currentWeather = normalizeWeatherCode(curWeather)
        currentWeatherIcon = currentWeather.url
        currentWeatherName = currentWeather.name
        currentHum = curHumidity
        windSpd = curWindSpeed
        windDirDeg = curWindDir.deg
        windDirName = curWindDir.dir
        if (windDirName === "VARIABLE") {
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
                    <div className="header">Kelembapan</div>
                    <div className="value">{currentHum}%</div>
                </div>
                <div className="col-4">
                    <div className="header">Kec. Angin</div>
                    <div className="value">{windSpd} km/h</div>
                </div>
                <div className="col-4">
                    <div className="header">Arah Angin</div>
                    <div className="value">{windDirName}&emsp;<img alt="compas dir"
                                                                   style={{transform: "rotate(" + windDirDeg + "deg)"}}
                                                                   height="16px" width="16px"
                                                                   src={process.env.PUBLIC_URL + '/compass.png'}/></div>
                </div>
            </div>
            <hr></hr>
            <div className="row mt-1 justify-content-around">
                <div className="col-2 px-0">
                    Saat ini<br></br>
                    {temperatureList[index + 0]}<sup>&deg;</sup>C
                </div>
                <div className="col-2 px-0">
                    +06.00<br></br>
                    {temperatureList[index + 1]}<sup>&deg;</sup>C
                </div>
                <div className="col-2 px-0">
                    +12.00<br></br>
                    {temperatureList[index + 2]}<sup>&deg;</sup>C
                </div>
                <div className="col-2 px-0">
                    +18.00<br></br>
                    {temperatureList[index + 3]}<sup>&deg;</sup>C
                </div>
                <div className="col-2 px-0">
                    +24.00<br></br>
                    {temperatureList[4]}<sup>&deg;</sup>C
                </div>
            </div>
            <Collapse isOpen={isOpen}>
                <div id="example-collapse-text">
                    <Link to={{
                        pathname: `/detail/${capitalizeEachWord(description)}`,
                        state: {props},
                    }}> See Detail </Link>
                </div>
            </Collapse>
        </div>

    );

};

export default Weathercard;