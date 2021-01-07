import React from 'react';
import Maps from "./Maps";

const Detail = (props) => {
    return (
        <div>

            <Maps center={{
                lat: parseFloat(props.location.state.lat),
                lng: parseFloat(props.location.state.long)
            }}/>
        </div>
    );
};

export default Detail;