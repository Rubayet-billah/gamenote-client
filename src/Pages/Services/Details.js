import React from 'react';

const Details = ({ service }) => {
    const { name, img, price } = service;
    return (
        <div className='md:flex'>
            <img className='md:w-1/2' src={img} alt="" />
            <div className="text-3xl md:w-1/2 text-center pt-6">
                <h2>{name}</h2>
            </div>
        </div>
    );
};

export default Details;