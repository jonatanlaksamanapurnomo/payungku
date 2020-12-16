import React, {useState, useEffect , useCallback} from 'react';
import {getDataByPlace} from "../api/api";
import {buildFilter, filterData} from "../utill/filter";
import {Button, Form, FormGroup, Input } from "reactstrap"
import {places} from "../utill/filter";
import { Typeahead } from 'react-bootstrap-typeahead';

const Home = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState({});

    const fetchData = useCallback((place = "Indonesia") =>{
        getDataByPlace(place).then(res => {
            setData(res)
        })
    },[])
   const onChangePlace = useCallback((e) => {
       let place = e.target.value;
       fetchData(place)

   },[fetchData])
    useEffect(() => {
        fetchData()
    }, [fetchData])

    const handleInput = (e) => {
        let filter = {};
        filter.description = e
        setFilter(filter)
    }

    const handleOnClick = () =>{
        let query = buildFilter(filter)
        let result = filterData(data, query)
        setData(result)
    }

    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <Form>
                        <FormGroup className="mb-3">
                            <Typeahead
                                id="basic-typeahead-single"
                                labelKey="place"
                                options={data.map(item => item.description)}
                                onChange={handleInput}
                                placeholder="Pilih Tempat..."
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input   defaultValue={"Indonesia"} onChange={onChangePlace}  type="select" name="select" id="exampleSelect">
                                {places.map(item => (
                                    <option key={places.indexOf(item)}>{item.place}</option>
                                ))}
                            </Input>
                        </FormGroup>
                        <FormGroup className="d-flex justify-content-center">
                            <Button  onClick={handleOnClick} color="primary">Search</Button>
                        </FormGroup>
                    </Form>
                </div>
                <div className="col-12">
                    {JSON.stringify(data , null , 2)}
                </div>
            </div>


        </div>
    );
};

export default Home;