import React, { useState, useEffect } from 'react';
import '../index.css';
import BlogList from './BlogList';


const Home = () => {

    const [blogs, setBlogs] = useState(null);





    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                res.json();
                // parses the json into js object
            })
            .then(data => {
                setBlogs(data);
            });
    }, [])

    return (
        <div className="content">

            {
                blogs && <BlogList blogs={blogs} title="Blogs by mario" />
            }

            {/*<BlogList
                blogs={blogs.filter(blog => blog.author !== 'mario')} title="Blogs by other authors" />*/}
        </div>
    )
}

export default Home