import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/Usercontext';

const Headers = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut();
    }
    return (
        <div className="navbar bg-base-300">
            <Link to='/' className="btn btn-ghost normal-case text-xl">daisyUI</Link>
            <Link to='/home' className="btn btn-ghost normal-case text-xl">home</Link>
            <Link to='/orders' className="btn btn-ghost normal-case text-xl">orders</Link>
            <Link to='/login' className="btn btn-ghost normal-case text-xl">login</Link>
            <Link to='/register' className="btn btn-ghost normal-case text-xl">register</Link>
            {user?.email && <span>{user.email}</span>}
            {user? <button onClick={handleSignOut} className="btn btn-sm">logout</button>: <button className="btn btn-sm">signIn</button>}

        </div>
    );
};

export default Headers;