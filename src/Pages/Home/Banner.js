import React from 'react';
import bannerImg from '../../assets/homeBanner.png'

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("${bannerImg}")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-5xl font-bold">Welcome To <br /> <span className='lg:text-8xl'>Game Note</span></h1>
                        <p className="mb-5">This is a gmaing based platform which provides the top up service of various kind of games.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;