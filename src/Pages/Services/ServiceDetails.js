import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Details from './Details';
import Reviews from './Reviews';

const ServiceDetails = () => {
    const service = useLoaderData()
    const { name, img, price } = service;
    return (
        <div>
            <h2 className='text-3xl md:text-6xl font-bold text-center my-5'>Service Details</h2>
            <Details service={service}></Details>
            <Reviews service={service}></Reviews>
        </div>
    );
};

export default ServiceDetails;