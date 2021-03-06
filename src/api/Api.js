import axios from "axios";
import {places} from "../utill/filter";


const fieldNameMapper = (value, index) => {
    let currDomain = value.getAttribute("domain");
    if(!currDomain.includes("Pelabuhan") && currDomain != "" && !currDomain.includes("isata")){
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
        let maxTemps = parseInt(value.getElementsByTagName("parameter")[2].getElementsByTagName("value")[0].childNodes[0].nodeValue);
        let minTemps = parseInt(value.getElementsByTagName("parameter")[4].getElementsByTagName("value")[0].childNodes[0].nodeValue);
    
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
                index,
                maxTemps,
                minTemps
            }
        )
    }
    else{
        return(
            {
            description: "error",
            domain: "error",
            curHumidity: "error",
            curTemp: "error",
            curWindDir: "error",
            curWindSpeed: "error",
            humids: "error",
            temps: "error",
            windSpeeds: "error",
            windDirs: "error",
            curWeather: "error",
            weathers: "error",
            index: "error",
            maxTemps: "error",
            minTemps: "error"
            }
        )
    }
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
        // let date = {
        //     hour: xmlDom.getElementsByTagName("issue")[0].getElementsByTagName("hour")[0].childNodes[0].nodeValue,
        //     minute: xmlDom.getElementsByTagName("issue")[0].getElementsByTagName("minute")[0].childNodes[0].nodeValue
        // }
        let today = new Date();
        let jam = [0, 6, 12, 18, 24, 30, 36, 42, 48 ,54 ,60 , 66]
        console.log(today.getHours())
        jam = jam.map(item => {
            return Math.abs((today.getHours() - 12) - item)
        })
        let idx = jam.indexOf(Math.min.apply(Math, jam)) +1
        
        console.log(idx)
        for (let item of area) {
            result.push(fieldNameMapper(item, idx))
        }
        console.log(result)
        return result;

    })
}


export {getDataByPlaceXML}