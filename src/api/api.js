import axios from "axios";
import XMLParser from "react-xml-parser";

const getJawaBarart = () => {
   return  axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-JawaBarat.xml").then(res => {
        let xmlData = res.data;
        let parser = new XMLParser().parseFromString(xmlData);
        return parser.children;
    })
}

const testParamFunc = (param1 , param2 ) => {
    console.log(param1 + param2);
}

export  {getJawaBarart }