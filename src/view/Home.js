import React, { useState, useEffect, useCallback } from 'react';
import { getDataByPlace } from "../api/api";
import { buildFilter, filterData } from "../utill/filter";
import { Button, Form, FormGroup, Input } from "reactstrap"
import { places } from "../utill/filter";
import { Typeahead } from 'react-bootstrap-typeahead';
import Weathercard from "../component/weathercard";

const Home = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState({});
    const [selectedPlace, setPlace] = useState("Indonesia");

    const fetchData = useCallback((place = "Indonesia") => {
        getDataByPlace(place).then(res => {
            // console.log(res)
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
        }
        else {
            let result = filterData(data, query)
            setData(result)
        }

    }

    return (
        <div className="container py-3">
            <div className="pb-3 pt-2">
                <h5>Payungku.</h5>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-12">
                    <Form>
                    <div className="w-75 row d-flex justify-content-between" style={{margin: "0 auto"}}>
                        <div className="col-5">
                            <FormGroup>
                                <Input defaultValue={"Indonesia"} onChange={onChangePlace} type="select" name="select"
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
                                <Button onClick={handleOnClick} color="primary" className="w-75 rounded">Search</Button>
                            </FormGroup>
                        </div>
                    </div>
                    </Form>
                </div>
                <div className="row  w-100">
                    {data.map(item => {
                        console.log(item)
                        // if (item.domain !== "pelabuhan" && item.domain !== "wisata lokasi") {
                            return (<div key={data.indexOf(item)} className="col-md-4">
                                <Weathercard data={item} />
                            </div>)
                        // }
                        // else return ""
                    }
                    )}

                </div>
            </div>


        </div>
    );
};

export default Home;