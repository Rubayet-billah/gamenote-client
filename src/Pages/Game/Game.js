import React from 'react';
import { Link } from 'react-router-dom';

const Game = ({ game }) => {

    const handleClick = () => {

    }
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{game.name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <Link to={`/services/${game._id}`}><button className="btn btn-sm btn-primary">Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Game;