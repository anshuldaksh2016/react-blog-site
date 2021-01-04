import React, { useState } from 'react';
import '../index.css';

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: "My new Website", body: "this is my new ..", author: 'mario', id: 1 },
        { title: "welcome party", body: "welcome to party", author: "Anshul", id: 2 },
        { title: "web dev tips", body: "Tips for web dev", author: "abhinav", id: 3 }
    ]);

    return (
        <div className="content">


            {  blogs.map((blog) => {
                return (
                    <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>{blog.body}</p>
                        <small> Written by : {blog.author}</small>
                    </div>
                )
            })}

        </div>
    )
}

export default Home