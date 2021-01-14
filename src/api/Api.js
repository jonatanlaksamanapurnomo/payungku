import axios from "axios";
import {places} from "../utill/filter";

const fieldNameMapper = (value, index) => {
    let curHumidity = value.getElementsByTagName("parameter")[0].getElementsByTagName("timerange")[index].getElementsByTagName("value")[0].childNodes[0].nodeValue;
    let curTemp = parseInt(value.getElementsByTagName("parameter")[5].getElementsByTagName("timerange")[index].getElementsByTagName("value")[0].childNodes[0].nodeValue);
    let curWindDir = {
        deg: value.getElementsByTagName("parameter")[7].getElementsByTagName("timerange")[index].getElementsByTagName("value")[0].childNodes[0].nodeValue,
        dir: value.getElementsByTagName("parameter")[7].getElementsByTagName("timerange")[index].getElementsByTagName("value")[1].childNodes[0].nodeValue
    }

    let curWindSpeed = parseInt(value.getElementsByTagName("parameter")[8].getElementsByTagName("timerange")[index].getElementsByTagName("value")[0].childNodes[0].nodeValue);
    let curWeather = parseInt(value.getElementsByTagName("parameter")[6].getElementsByTagName("timerange")[index].getElementsByTagName("value")[0].childNodes[0].nodeValue);
    let humids = [];
    let humid = value.getElementsByTagName("parameter")[0].getElementsByTagName("timerange")
    let temps = [];
    let temp = value.getElementsByTagName("parameter")[5].getElementsByTagName("timerange")
    for (let item of humid) {
        humids.push(item.getElementsByTagName("value")[0].childNodes[0].nodeValue)
    }
    let weathers = [];
    let weather = value.getElementsByTagName("parameter")[6].getElementsByTagName("timerange")
    for (let item of weather) {
        weathers.push(parseInt(item.getElementsByTagName("value")[0].childNodes[0].nodeValue))
    }
    for (let item of temp) {
        temps.push(item.getElementsByTagName("value")[0].childNodes[0].nodeValue)
    }
    let windSpeeds = [];
    let windSpeed = value.getElementsByTagName("parameter")[8].getElementsByTagName("timerange")
    for (let item of windSpeed) {
        windSpeeds.push(item.getElementsByTagName("value")[2].childNodes[0].nodeValue)
    }
    let windDirs = [];
    let windDir = value.getElementsByTagName("parameter")[7].getElementsByTagName("timerange")
    for (let item of windDir) {
        let obj =
            {
                deg: item.getElementsByTagName("value")[0].childNodes[0].nodeValue,
                dir: item.getElementsByTagName("value")[1].childNodes[0].nodeValue,
            }
        windDirs.push(obj)
    }

    return (
        {
            description: value.getElementsByTagName("name")[0].childNodes[0].nodeValue,
            domain: value.getAttribute("domain"),
            curHumidity,
            curTemp,
            curWindDir,
            curWindSpeed,
            humids,
            temps,
            windSpeeds,
            windDirs,
            curWeather,
            weathers,
            index

        }
    )
};


const getDataByPlaceXML = (keyword) => {
    let arrData = places.filter(item => {
        return item.place === keyword
    })

    let {url} = arrData[0];
    return axios.get(`https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/${url}`).then(res => {
        let xmlData = res.data;
        let domParser = new DOMParser();
        let xmlDom = domParser.parseFromString(xmlData, "text/xml")
        //increment +2 untuk nama dalam bahasa indonesia
        // bahasa indonesia mulai dari 1 , english dari 0
        let result = [];
        let area = xmlDom.getElementsByTagName("area")
        let date = {
            hour: xmlDom.getElementsByTagName("issue")[0].getElementsByTagName("hour")[0].childNodes[0].nodeValue,
            minute: xmlDom.getElementsByTagName("issue")[0].getElementsByTagName("minute")[0].childNodes[0].nodeValue
        }
        let today = new Date();
        let jam = [0, 6, 12, 18, 24]
        jam = jam.map(item => {
            return Math.abs((today.getHours() - date.hour) - item)
        })
        let idx = jam.indexOf(Math.min.apply(Math, jam))
        for (let item of area) {
            result.push(fieldNameMapper(item, idx))
        }
        return result;

    })
}


export {getDataByPlaceXML}