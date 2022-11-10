import React from 'react';
import useTitle from '../../hooks/useTitle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddService = () => {
    useTitle('Add Service')

    const notify = () => toast.success("Service Added Successfully");
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const serviceName = form.name.value;
        const serviceImg = form.image.value;
        const serviceItem = form.item.value;
        const servicePrice = form.price.value;
        const serviceSeller = form.seller.value;
        const serviceDescription = form.description.value;


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
                if (data.acknowledged) {
                    notify();
                    form.reset()
                }
            })
    }
    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col w-full">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Add Service</h1>
                    </div>
                    <p className='text-center'>Here you can add new service relevent to this website.But you must provide all the service information.</p>
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service Name</span>
                                </label>
                                <input type="name" name='name' placeholder="service name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service Image</span>
                                </label>
                                <input type="text" name='image' placeholder="service image url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service Item</span>
                                </label>
                                <input type="text" name='item' placeholder="service item" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service Price</span>
                                </label>
                                <input type="text" name='price' placeholder="service price" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service Seller</span>
                                </label>
                                <input type="text" name='seller' placeholder="service seller" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service Description</span>
                                </label>
                                <textarea name='description' className="textarea textarea-bordered w-full" placeholder="add description" required></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Add Service</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light" />
        </div>
    );
};

export default AddService;