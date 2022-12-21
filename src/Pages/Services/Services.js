import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import Spinner from '../../Spinner/Spinner';
import Game from '../Game/Game';

const Services = () => {
    const [games, setGames] = useState([])
    useTitle('Services')

    useEffect(() => {
        fetch('https://assignment-11-server-puce.vercel.app/services')
            .then(res => res.json())
            .then(data => setGames(data))
    }, [])

    if (games.length === 0) {
        return <Spinner></Spinner>
    }
    return (
        <div className='my-5'>
            <main className='grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-5'>
                {
                    games.map(gm => <Game
                        key={gm._id}
                        game={gm}
                    />)
                }
            </main>
        </div>
    );
};

export default Services;