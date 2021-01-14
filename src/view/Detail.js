import React, {useState, useEffect} from 'react';
import {Line} from '@reactchartjs/react-chart.js'

const Detail = (props) => {
    const exampleData = {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            },
        ],
    }

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    }
    const [data, setData] = useState({});
    useEffect(() => {
        setData(props.location.state.props.data)
    }, [])
    return (
        <div>
            <p>hillu</p>
            <p>{JSON.stringify(data)}</p>
            <Line data={exampleData} options={options}/>
        </div>
    );
};

export default Detail;