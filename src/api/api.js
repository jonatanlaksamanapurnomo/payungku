import axios from "axios";
import XMLParser from "react-xml-parser";
import {places} from "../utill/filter";

const fieldNameMapper = value => {
    return (
        {
            id: value.attributes.id,
            description: value.attributes.description.toLowerCase(),
            domain: value.attributes.domain.toLowerCase(),
            child: value.children,
            lat: value.attributes.latitude,
            long: value.attributes.longitude
        }
    )
};


const getDataByPlace = (keyword) => {
    let arrData = places.filter(item => {
        return item.place === keyword
    })

    let {url}= arrData[0];
    return axios.get(`https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/${url}`).then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        let parseredJSON = parser.children[0].children.slice(1);
        parseredJSON = parseredJSON.map((item) => {
            return fieldNameMapper(item)
        })

        return parseredJSON;
    })
}



export {getDataByPlace}