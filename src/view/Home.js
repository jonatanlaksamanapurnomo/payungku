import React , {useState,useEffect} from 'react';
import {getBali } from "../api/api";

const Home = () => {
    const [data , setData] = useState([]);
    useEffect(() => {
        getBali().then(res => {
            console.log(res)
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