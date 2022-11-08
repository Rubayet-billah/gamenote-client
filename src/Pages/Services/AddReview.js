import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const AddReview = ({ service }) => {
    const { user } = useContext(AuthContext);



    const handleReviewSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const ratings = form.ratings.value;
        const description = form.description.value;

        let myReview = {
            serviceName: service.name,
            reviewer: user.displayName,
            email: user.email,
            image: user.photoURL,
            description,
            ratings,
        }
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(myReview)
        }).then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <div>
            <form onSubmit={handleReviewSubmit}>
                <div className="form-control">
                    <div className="input-group">
                        <select name='ratings' className="select select-bordered" defaultValue='5.0'>
                            <option disabled>Select Star</option>
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
                <br />
                <textarea name='description' className="textarea textarea-bordered w-full" placeholder="Description"></textarea>
                <button type='submit' className='btn btn-secondary'>Review</button>
            </form>
        </div>
    );
};

export default AddReview;