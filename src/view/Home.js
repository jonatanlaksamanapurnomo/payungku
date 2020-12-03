import React , {useState,useEffect} from 'react';
import axios from "axios";
import XMLParser from 'react-xml-parser';
const Home = () => {
    const [data , setData] = useState([]);
    useEffect(() => {
        axios.get("https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-JawaBarat.xml").then(res => {
            let xmlData = res.data;
            let parser = new XMLParser().parseFromString(xmlData);
            setData(parser.children)
        })
    },[])
    return (
        <div>
            {data.length >= 0  ? JSON.stringify(data) : "" }
        </div>
    );
};

export default Home;