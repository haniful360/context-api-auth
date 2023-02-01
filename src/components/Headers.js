import React from 'react';
import { Link } from 'react-router-dom'
const Headers = () => {
    return (
        <div className="navbar bg-base-300">
            <Link to='/' className="btn btn-ghost normal-case text-xl">daisyUI</Link>
            <Link to='/home' className="btn btn-ghost normal-case text-xl">home</Link>
            <Link to='/orders' className="btn btn-ghost normal-case text-xl">orders</Link>
            <Link to='/login' className="btn btn-ghost normal-case text-xl">login</Link>
            <Link to='/register' className="btn btn-ghost normal-case text-xl">register</Link>

        </div>
    );
};

export default Headers;