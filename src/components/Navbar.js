import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <h2>Anshul Blog </h2>

                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>

                    <Link to="/new">
                        New Blog</Link>
                </div>

            </nav>
        </div>
    )
}
