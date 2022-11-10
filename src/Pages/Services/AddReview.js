import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const AddReview = ({ service, update, setUpdate }) => {
    const { user } = useContext(AuthContext);



    const handleReviewSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const ratings = form.ratings.value;
        const description = form.description.value;

        let myReview = {
            date: new Date(),
            serviceId: service._id,
            serviceName: service.name,
            reviewer: user.displayName,
            email: user.email,
            image: user.photoURL,
            description,
            ratings,
        }
        console.log(myReview);
        fetch('https://assignment-11-server-puce.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(myReview)
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                setUpdate(!update)
                form.reset()
            })
    }

    return (
        <div className='my-5'>
            <h2 className='text-xl my-2'>Write Your Review</h2>
            <form onSubmit={handleReviewSubmit}>
                <div className="form-control">
                    <div className="input-group">
                        <textarea name='description' className="textarea textarea-bordered w-full" placeholder="Description"></textarea>
                        <select name='ratings' className="select select-sm select-bordered">
                            <option disabled>Ratings</option>
                            <option>5.0</option>
                            <option>4.5</option>
                            <option>4.0</option>
                            <option>3.5</option>
                            <option>3.0</option>
                            <option>2.5</option>
                            <option>2.0</option>
                            <option>1.5</option>
                            <option>1.0</option>
                            <option>0.5</option>
                        </select>
                    </div>
                </div>
                <button type='submit' className='btn btn-secondary btn-sm mt-3'>Add Review</button>
            </form>
        </div>
    );
};

export default AddReview;