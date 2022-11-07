import React, { useEffect, useState } from 'react';

const Home = () => {
    const [games, setGames] = useState([])

    const size = 3;

    useEffect(() => {
        fetch(`http://localhost:5000/games/?size=${size}`)
            .then(res => res.json())
            .then(data => {
                setGames(data)
            })
    }, [])
    return (
        <div className='text-8xl'>
            {games.length}
        </div>
    );
};

export default Home;