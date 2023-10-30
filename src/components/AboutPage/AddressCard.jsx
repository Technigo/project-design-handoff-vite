import React from 'react';


function AddressCard(props) {
    return (
        <div className="address-card">
            <h2>Address:</h2>
            <p>{props.location}</p>
            <p>{props.detail1}</p>
            <p>{props.detail2}</p>
            <p>{props.region}</p>
            <p>{props.world}</p>
        </div>
    );
}

export default AddressCard;
