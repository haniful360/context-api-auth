import React, { useContext } from 'react';
import { AuthContext } from '../context/Usercontext';

const Home = () => {
    const abe = useContext(AuthContext);
    console.log(abe);
    return (
        <div>
            <h1>this is home {abe}</h1>
        </div>
    );
};

export default Home;