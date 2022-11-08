import React from 'react';
import { FaStar, FaTrashAlt } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyReviewRow = ({ review, update, setUpdate }) => {
    const { _id, serviceName, reviewer, email, image, description, ratings } = review;
    const notify = () => toast.success("User deleted successfully");

    const handleDelete = (id) => {
        const confirmation = window.confirm('Are you sure to delete this review')
        if (confirmation) {
            fetch(`http://localhost:5000/myreview/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    notify();
                    setUpdate(!update)
                })
        }
    }

    const handleUpdate = (id) => {
        fetch(`http://localhost:5000/myreview/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ description: 'this is edited' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setUpdate(!update)
            })
    }

    return (
        <div>
            <div className='border rounded p-3 mt-3'>
                <div className='flex items-center'>
                    <img className='w-12 h-12 rounded-full' src={image} alt="" />
                    <div className='ml-2'>
                        <h3 className='text-xl font-bold'>{reviewer}</h3>
                        <p>{email}</p>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <p className='w-3/4'>{description}</p>
                    <div>
                        <p className='flex items-center'>{ratings} <FaStar className='text-yellow-400' /></p>
                        <button onClick={() => handleUpdate(_id)} className='btn btn-sm btn-outline mr-2'>Edit</button> <br />
                        <button onClick={() => handleDelete(_id)} className='btn btn-sm btn-outline btn-error mt-3'><FaTrashAlt className='mx-2' /></button>
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
        </div>
    );
};

export default MyReviewRow;