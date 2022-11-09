import React from 'react';
import { FaStar, FaTrashAlt } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyReviewRow = ({ review, update, setUpdate }) => {
    const { _id, serviceName, reviewer, email, image, description, ratings } = review;

    const handleDelete = (id) => {
        const notify = () => toast.success("User deleted successfully");
        const confirmation = window.confirm('Are you sure to delete this review')
        if (confirmation) {
            fetch(`https://assignment-11-server-puce.vercel.app/myreview/${id}`, {
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
        // fetch(`https://assignment-11-server-puce.vercel.app/myreview/${id}`, {
        //     method: 'PATCH',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify({ description: 'this is edited' })
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //         setUpdate(!update)
        //     })


    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newDescription = event.target.description.value;
        console.log(newDescription)
        const notify = () => toast.success("User Updated successfully");
        fetch(`https://assignment-11-server-puce.vercel.app/myreview/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ description: newDescription })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    event.target.reset()
                    notify();
                    setUpdate(!update)
                }
            })
    }

    return (
        <div>
            <div className='border rounded p-3 md:p-8  my-3'>
                <div className='md:flex items-center'>
                    <img className='w-12 h-12 rounded-full' src={image} alt="" />
                    <div className='md:ml-2'>
                        <h3 className='text-xl font-bold'>{reviewer}</h3>
                        <p>{email}</p>
                    </div>
                    <h2 className='text-xl font-bold ml-auto'>Service: {serviceName}</h2>
                </div>
                <hr className='my-2' />
                <div className='flex justify-between'>
                    <p className='w-3/4'>{description}</p>
                    <div>
                        <p className='flex items-center'>{ratings} <FaStar className='text-yellow-400' /></p>
                        <label htmlFor="my-modal-5" onClick={handleUpdate} className='btn btn-sm btn-outline mr-2'>Edit</label> <br />
                        <button onClick={() => handleDelete(_id)} className='btn btn-sm btn-outline btn-error mt-3'><FaTrashAlt className='mx-2' /></button>
                    </div>

                    {/* The button to open modal */}
                    {/* <label htmlFor="my-modal-5" className="btn">open modal</label> */}

                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box w-11/12 max-w-5xl">
                            <h3 className="font-bold text-2xl text-center mb-3">Update review</h3>
                            <form onSubmit={handleSubmit}>
                                <textarea name='description' defaultValue={description} className="textarea textarea-bordered w-full" placeholder="Descriptopn"></textarea>
                                <div className="modal-action">
                                    <button className='btn btn-sm btn-primary' type='submit'>Update</button>
                                    <label htmlFor="my-modal-5" className="btn btn-sm">Close</label>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* modal end */}

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