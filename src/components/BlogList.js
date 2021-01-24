//blog list component contains all the blogs as a list 

import React from "react";


const BlogList = ({ blogs, title }) => {
    // we can also destructure props let it be

    return (
        <div className="blog-list">
            <h2>{title}</h2>

            {
                blogs.map((blog) => {

                    return (
                        <div className="blog-preview" key={blog.id}>
                            <h2>{blog.title}</h2>
                            <p>{blog.body}</p>
                            <p>Written By : {blog.author}</p>


                        </div>
                    )
                })
            }
        </div>
    )
}


export default BlogList;