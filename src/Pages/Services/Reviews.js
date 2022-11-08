import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const Reviews = () => {
    const { user } = useContext(AuthContext)

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const ratings = form.ratings.value;
        console.log(ratings)
    }
    return (
        <div>
            <form onSubmit={handleReviewSubmit}>
                <div className="form-control">
                    <div className="input-group">
                        <select name='ratings' className="select select-bordered">
                            <option disabled selected>Select Star</option>
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
                        <button className="btn">Go</button>
                    </div>
                </div>
                <br />
                <textarea className="textarea textarea-bordered" placeholder="Bio"></textarea>
                <button type='submit' className='btn btn-secondary'>submit</button>
            </form>
        </div>
    );
};

export default Reviews;