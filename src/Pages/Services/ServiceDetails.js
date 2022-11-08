import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Details from './Details';
import Reviews from './Reviews';

const ServiceDetails = () => {
    const service = useLoaderData()
    const { name, img, price } = service;
    return (
        <div className='grid md:grid-cols-2'>
            <Details service={service}></Details>
            <Reviews></Reviews>
        </div>
    );
};

export default ServiceDetails;