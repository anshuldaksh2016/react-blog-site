import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <h2>Anshul Blog </h2>

                <div className="links">
                    <a href="/">Home</a>
                    <a href="/about">About</a>

                    <a href="/new">
                        New Blog</a>
                </div>

            </nav>
        </div>
    )
}
