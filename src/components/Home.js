import React from 'react';
import '../index.css';
import useFetch from '../useFetch';
import BlogList from './BlogList';


const Home = () => {

    const { data: blogs, isPending, Error } = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">

            {
                Error && <div>{Error}</div>
            }
            {
                isPending && <div>Please Wait ..........</div>
            }

            {
                blogs && <BlogList blogs={blogs} title="Blogs by mario" />
            }


        </div>
    )
}

export default Home