import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { FaUserAlt } from 'react-icons/fa'

const Header = () => {

    const { user, logoutUser } = useContext(AuthContext)

    const handleLogout = () => {
        logoutUser()
            .then(() => { })
            .catch(err => console.error(err))
    }

    const menu = <>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/services'>Services</Link></li>
        <li><Link to='/blogs'>Blog</Link></li>

        {user?.email ?
            <>
                <li><Link to='/addservice'>Add Service</Link></li>
                <li><Link to='/myreview'>My Reviews</Link></li>
                <li><Link onClick={handleLogout} to='/home' className='bg-yellow-300 font-bold'>Logout</Link></li>
            </>
            :
            <><li><Link to='/login'>Login</Link></li>
                <li><Link to='/register'>Register</Link></li></>
        }
    </>
    return (
        <div>
            <div className="navbar bg-base-200">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menu}
                        </ul>
                    </div>
                    <Link to='/home' className="btn btn-ghost normal-case text-2xl md:text-4xl font-bold lg:ml-12"><span className='text-primary'>GAME</span><span className='text-secondary'>NOTE</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menu}
                    </ul>
                </div>
                <div className="navbar-end md:mr-8">
                    {
                        user?.email ? <span className='font-bold hidden md:inline-block'>{user?.displayName}</span> : <></>
                    }
                    {
                        user?.photoURL ? <img title={user?.email} className='w-8 h-8 rounded-full mx-2' src={user.photoURL} alt="" /> : <FaUserAlt />
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;