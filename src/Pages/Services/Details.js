import React from 'react';

const Details = ({ service }) => {
    const { name, img, price } = service;
    return (
        <div>
            <img src={img} alt="" />
            <h2 className="text-3xl">{name}</h2>
        </div>
    );
};

export default Details;