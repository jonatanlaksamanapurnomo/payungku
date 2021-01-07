import React from 'react';
import Maps from "./Maps";

const Detail = (props) => {
    return (
        <div>
            <Maps center={{
                lat: -8.643480,
                lng: 115.22460
            }}/>
        </div>
    );
};

export default Detail;