import React , {useState,useEffect} from 'react';
import {getJawaBarart } from "../api/api";

const Home = () => {
    const [data , setData] = useState([]);
    useEffect(() => {
        getJawaBarart().then(res => {
            setData(res)
        })
    },[])
    return (
        <div>
            {data.length >= 0  ? JSON.stringify(data) : "" }
        </div>
    );
};

export default Home;