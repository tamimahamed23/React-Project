import { useLoaderData } from "react-router-dom";
import BlogDiv from "../BlogDiv/BlogDiv";


const Blog = () => {
    const blogs = useLoaderData();
    console.log(blogs)
    return (
        <div>
            


            <div>
                {
                    blogs.map(blog => <BlogDiv key={blog.id} blog={blog}></BlogDiv>)
                }
            </div>
        </div>
    );
};

export default Blog;