import { GetStaticProps } from "next"
import Post from "../components/blog/Post";
import { Blog, fetchAllBlogs } from "../lib/api"

interface Blogs {
  blogs: Blog[];
}

const Articles = ({blogs}: Blogs) => {
  console.log(blogs);
  return (
    <div>
      {blogs && blogs.map((blog) => (
        <Post key={blog.id} {...blog} />
      ))}
    </div>
  )
}

export default Articles

export const getStaticProps: GetStaticProps = async () => {
  const blogs = await fetchAllBlogs();
  return {
    props: {
      blogs
    }
  }
}