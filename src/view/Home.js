import React, {useState, useEffect} from 'react';
import {getBali} from "../api/api";
import {buildFilter, filterData} from "../utill/filter";
import {Button, Form, FormGroup, Input} from "reactstrap"

const Home = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState({});
    useEffect(() => {
        let filter = {
            domain: ["Bali"],
            latitude: ["-8.42"]
        }
        let queryFiler = buildFilter(filter)

        getBali().then(res => {
            // console.log(filterData(res , queryFiler))
            setData(res)
        })
    }, [])

    const handleInput = (e) => {
        let filter = {};
        filter.description = [e.target.value]
        setFilter(filter)
    }

    const handleOnClick = () =>{
        let query = buildFilter(filter)
        let result = filterData(data, query)
        return result
    }

    return (
        <div>
            <Form>
                <FormGroup>
                    <Input type="text" onChange={handleInput} placeholder="search domain"/>
                </FormGroup>
                <FormGroup>
                    <Button onClick={handleOnClick} color="primary">Test!</Button>
                </FormGroup>
            </Form>

        </div>
    );
};

export default Home;