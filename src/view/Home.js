import React, {useState, useEffect, useCallback} from 'react';
import {buildFilter, filterData} from "../utill/filter";
import {Button, Form, FormGroup, Input} from "reactstrap"
import {places} from "../utill/filter";
import {Typeahead} from 'react-bootstrap-typeahead';
import Weathercard from "../component/weathercard";
import {getDataByPlaceXML} from "../api/Api";
import {getMostHeatCity, getMostWindSpeedCity} from "../utill/filter";


const Home = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState({});
    const [selectedPlace, setPlace] = useState("Indonesia");
    const [sortedByHeat, setCity] = useState([]);
    const [sortedByWindSpeed, setWindSpeed] = useState([]);
    const fetchData = useCallback((place = "Indonesia") => {
        getDataByPlaceXML(place).then(res => {
            setCity(getMostHeatCity(res))
            setWindSpeed(getMostWindSpeedCity(res))
            setData(res)
        })
    }, [])
    const onChangePlace = useCallback((e) => {
        let place = e.target.value;
        fetchData(place)
        setPlace(place)


    }, [fetchData])
    useEffect(() => {
        fetchData()
    }, [fetchData])

    const handleInput = (e) => {
        let filter = {};
        filter.description = e
        setFilter(filter)
    }

    const handleOnClick = () => {
        let query = buildFilter(filter)
        if (Object.keys(query).length === 0 && query.constructor === Object) {
            fetchData(selectedPlace)
        } else {
            let result = filterData(data, query)
            setData(result)
        }

    }

    if(sortedByHeat[0]==null || sortedByWindSpeed[0]==null){
        return <p>Loading..</p>
    }

    return (
        <div className="container py-3">
            <div className="pb-3 pt-2">
                <h5>Payungku.</h5>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-12">
                {/* <div className="row my-4">
                    <div className="col-5 rounded border p-3 mx-3 text-white" style={{backgroundColor:"rgb(247 170 71)"}}>
                        <small>Kota Terpanas</small>
                        <h2 className="mb-0"><b>{sortedByHeat[0].description}</b></h2>
                        <p className="mb-0"><b>{sortedByHeat[0].domain}</b></p>
                        <div><b>{sortedByHeat[0].maxTemps}° C</b></div>
                    </div>
                    <div className="col-5 rounded border p-3 mx-3 text-white" style={{backgroundColor:"rgb(68 156 173 / 80%)"}}>
                        <small>Kota paling Berangin</small>
                        <h2 className="mb-0"><b>{sortedByWindSpeed[0].description}</b></h2>
                        <p className="mb-0"><b>{sortedByWindSpeed[0].domain}</b></p>
                        <div><b>{sortedByWindSpeed[0].curWindSpeed} km/h</b></div>
                    </div>
                </div> */}
                    {/* <p>Kota terpanas</p>
                    {JSON.stringify(sortedByHeat[0])}
                    <p className="mt-5">Kota paling berangin</p>
                    {JSON.stringify(sortedByWindSpeed[0])} */}
                    <Form>
                        <div className="w-75 row d-flex justify-content-between" style={{margin: "0 auto"}}>
                            <div className="col-5">
                                <FormGroup>
                                    <Input defaultValue={"Indonesia"} onChange={onChangePlace} type="select"
                                           name="select"
                                           id="exampleSelect">
                                        {places.map(item => (
                                            <option key={places.indexOf(item)}>{item.place}</option>
                                        ))}
                                    </Input>
                                </FormGroup>
                            </div>
                            <div className="col-5">
                                <FormGroup className="mb-3">
                                    <Typeahead
                                        id="basic-typeahead-single"
                                        labelKey="place"
                                        options={data.map(item => item.description)}
                                        onChange={handleInput}
                                        placeholder="Pilih Tempat..."
                                    />
                                </FormGroup>
                            </div>
                            <div className="col-2 px-0">
                                <FormGroup className="d-flex justify-content-center">
                                    <Button onClick={handleOnClick} color="primary"
                                            className="w-75 rounded">Search</Button>
                                </FormGroup>
                            </div>
                        </div>
                    </Form>
                </div>
                <div className="row  w-100 bg-red">
                    {data.map(item => {

                            return (<div key={data.indexOf(item)} className="col-md-4">
                                <Weathercard data={item}/>
                            </div>)
                        }
                    )}

                </div>
            </div>


        </div>
    );
};

export default Home;