//blog list component contains all the blogs as a list 


const BlogList = (props) => {
    // we can also destructure props let it be

    const blogs = props.blogs;
    const title = props.title;
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {
                blogs.map((blog) => {

                    return (
                        <div className="blog-preview" key={blog.id}>
                            <h2>{blog.title}</h2>
                            <p>Written By : {blog.author}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}


export default BlogList;