import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const AddService = () => {
    useTitle('Add Service')

    const handleSubmit = (e) => {
        e.preventDefault();
        const from = e.target;
        const serviceName = from.name.value;
        const serviceImg = from.image.value;
        const serviceItem = from.item.value;
        const servicePrice = from.price.value;
        const serviceSeller = from.seller.value;
        const serviceDescription = from.description.value;


        const addedService = {
            img: serviceImg,
            category: 'Gaming',
            name: serviceName,
            credit: serviceItem,
            deration: 30,
            price: servicePrice,
            seller: serviceSeller,
            details: serviceDescription

        }

        fetch('https://assignment-11-server-puce.vercel.app/addservice', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addedService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col w-full">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold mb-5">Add Service</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service Name</span>
                                </label>
                                <input type="name" name='name' placeholder="service name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service Image</span>
                                </label>
                                <input type="text" name='image' placeholder="service image url" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service Item</span>
                                </label>
                                <input type="text" name='item' placeholder="service item" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service Price</span>
                                </label>
                                <input type="text" name='price' placeholder="service price" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service Seller</span>
                                </label>
                                <input type="text" name='seller' placeholder="service seller" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service Description</span>
                                </label>
                                <textarea name='description' className="textarea textarea-bordered w-full" placeholder="add description"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Add Service</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;