import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Spinner from '../Spinner/Spinner';

const Main = () => {
    const { loader } = useContext(AuthContext)

    if (loader) {
        return <Spinner></Spinner>
    }
    return (
        <div>
            <Header></Header>
            <section className=' min-h-screen flex flex-col justify-between'>
                <main className='container mx-auto'>
                    <Outlet></Outlet>
                </main>
                <footer>
                    <Footer></Footer>
                </footer>
            </section>
        </div>
    );
};

export default Main;