import React, { useState, useEffect } from 'react';
import '../index.css';
import BlogList from './BlogList';


const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoding] = useState(true);



    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                res.json();
                // parses the json into js object
            })
            .then(data => {
                setBlogs(data);
                setIsLoding(false);
            });
    }, [])

    return (
        <div className="home">

            {
                isLoading && <div>Please Wait ..........</div>
            }

            {
                blogs && <BlogList blogs={blogs} title="Blogs by mario" />
            }


        </div>
    )
}

export default Home