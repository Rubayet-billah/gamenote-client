import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const service = useLoaderData()
    const { name, img, price } = service;
    return (
        <div>
            <img src={img} alt="" />
            <h2 className="text-3xl">{name}</h2>
        </div>
    );
};

export default ServiceDetails;