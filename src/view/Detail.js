import React, {useState, useEffect} from 'react';
import {Line} from '@reactchartjs/react-chart.js'
import {Link} from "react-router-dom";

const Detail = (props) => {
    const [data, setData] = useState({});
    useEffect(() => {
        setData(props.location.state.props.data)
    }, [])

    const exampleData = {
        labels: ["Saat Ini", "+06.00","+12.00","+18.00","+24.00"],
        datasets: [
            {
                label: 'Suhu dalam Celcius',
                data: data.temps,
                fill: true,
                backgroundColor: 'rgba(132, 99, 255, 0.3)',
            },
        ],
    }

    const options = {
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                gridLines: {
                   display: false
                }
             }],
            yAxes: [{
                gridLines: {
                    display: false
                },
                ticks: {
                    min: 10,
                }
            }]
        },
        plugins: {
            datalabels: {
                display: true,
                color: 'black'
             }
        }
    }
    
    return (
        <div className="py-4 bg-light">
            <div className="container p-3 border rounded shadow-sm bg-white">
                <p><Link to={{
                        pathname: `/`,
                    }}>&larr; back to home</Link>
                </p>
                <h3 className="py-1 text-center my-3">{data.description}, {data.domain}</h3>
                <div className="container p-2">
                    <div class="row ml-0 justify-content-center">
                        <div className="col-3 px-0">
                            <div className="d-flex align-items-center justify-content-center">
                                <div className="mx-1">
                                    <img height="36px" width="36px" src={process.env.PUBLIC_URL + '/humidity.png'}/>
                                </div>
                                <div className="mx-1">
                                    <div>Humidity</div>
                                    <div>{data.curHumidity}</div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-2">
                            <div className="d-flex align-items-center">
                                <div className="mx-1">
                                    <img height="36px" width="36px" src={process.env.PUBLIC_URL + '/wind.png'}/>
                                </div>
                                <div className="mx-1">
                                    <div className="text-secondary">Kec. Angin</div>
                                    <div>{data.curWindSpeed}&nbsp;{data.curWindDir.dir}&nbsp;<img alt="compas dir"
                                                                   style={{transform: "rotate(" + data.curWindDir.deg + "deg)"}}
                                                                   height="16px" width="16px"
                                                                   src={process.env.PUBLIC_URL + '/compass.png'}/></div>
                                </div>
                            </div>
                        </div> */}
                        <div className="col-3 px-0">
                            <div className="d-flex align-items-center justify-content-center">
                                <div className="mx-1">
                                    <img height="36px" width="36px" src={process.env.PUBLIC_URL + '/thermometer.png'}/>
                                </div>
                                <div className="mx-1">
                                    <div>Max Temp</div>
                                    <div>{data.maxTemps}</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 px-0">
                            <div className="d-flex align-items-center justify-content-center">
                                <div className="mx-1">
                                    <img height="36px" width="36px" src={process.env.PUBLIC_URL + '/thermometer.png'}/>
                                </div>
                                <div className="mx-1">
                                    <div>Min Temp</div>
                                    <div>{data.minTemps}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <p>{JSON.stringify(data)}</p> */}
                <div className="container">
                    <Line data={exampleData} options={options}/>
                </div>
            </div>
        </div>
    );
};

export default Detail;