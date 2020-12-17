import React from 'react';
import "./weather.css";
const Weathercard = () => {
    return (<div className="container d-flex justify-content-center">
        <div className="weather">
            <div className="row">
                <div className=" col-md-6">
                    <div className="card"> <span className="icon"><img  alt="" className="img-fluid" src="https://img.icons8.com/emoji/96/000000/sun-emoji.png" /></span>
                        <div className="title">
                            <p>Sydney</p>
                        </div>
                        <div className="temp">+20<sup>&deg;</sup></div>
                        <div className="row">
                            <div className="col-4">
                                <div className="header">General</div>
                                <div className="value">Sunny</div>
                            </div>
                            <div className="col-4">
                                <div className="header">Air pollution</div>
                                <div className="value">47</div>
                            </div>
                            <div className="col-4">
                                <div className="header">Fire</div>
                                <div className="value">No</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card"> <span className="icon"><img alt="" className="img-fluid" src="https://img.icons8.com/emoji/96/000000/sun-emoji.png" /></span>
                        <div className="title">
                            <p>Melbourne</p>
                        </div>
                        <div className="temp">+18<sup>&deg;</sup></div>
                        <div className="row">
                            <div className="col-4">
                                <div className="header">General</div>
                                <div className="value">Sunny</div>
                            </div>
                            <div className="col-4">
                                <div className="header">Air pollution</div>
                                <div className="value">20</div>
                            </div>
                            <div className="col-4">
                                <div className="header">Fire</div>
                                <div className="value">No</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card"> <span className="icon"><img alt="" className="img-fluid" src="https://img.icons8.com/emoji/96/000000/sun-emoji.png" /></span>
                        <div className="title">
                            <p>Melbourne</p>
                        </div>
                        <div className="temp">+18<sup>&deg;</sup></div>
                        <div className="row">
                            <div className="col-4">
                                <div className="header">General</div>
                                <div className="value">Sunny</div>
                            </div>
                            <div className="col-4">
                                <div className="header">Air pollution</div>
                                <div className="value">20</div>
                            </div>
                            <div className="col-4">
                                <div className="header">Fire</div>
                                <div className="value">No</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</div>);

};

export default Weathercard;