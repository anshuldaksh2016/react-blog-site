import React, { useState, useEffect } from 'react';
import '../index.css';
import BlogList from './BlogList';


const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: "My new Website", body: "this is my new ..", author: 'mario', id: 1 },
        { title: "welcome party", body: "welcome to party", author: "Anshul", id: 2 },
        { title: "web dev tips", body: "Tips for web dev", author: "abhinav", id: 3 }
    ]);

    const [name, setName] = useState("Initial Name");
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs)
    }


    useEffect(() => {
        console.log("useEffect runs");
    }, [name])

    return (
        <div className="content">
            <BlogList blogs={blogs} title="Blogs by mario " handleDelete={handleDelete} />
            <p onClick={() => setName("Ravi")}>{name}</p>
            {/*<BlogList
                blogs={blogs.filter(blog => blog.author !== 'mario')} title="Blogs by other authors" />*/}
        </div>
    )
}

export default Home