import React, {useState, useEffect , useCallback} from 'react';
import {getDataByPlace} from "../api/api";
import {buildFilter, filterData} from "../utill/filter";
import {Button, Form, FormGroup, Input , Label} from "reactstrap"

const Home = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState({});

    const fetchData = useCallback(() =>{
        getDataByPlace().then(res => {
            // console.log(filterData(res , queryFiler))
            console.log(res)
            setData(res)
        })
    },[])
    useEffect(() => {
        fetchData()
    }, [fetchData])

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
                    <Label for="exampleSelect">Select Place</Label>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Button onClick={handleOnClick} color="primary">Test!</Button>
                </FormGroup>
            </Form>

        </div>
    );
};

export default Home;