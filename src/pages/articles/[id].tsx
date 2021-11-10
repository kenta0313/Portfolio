import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { Blog, fetchAllBlogs, fetchPostById } from "../../lib/api";

interface Post {
  post: Blog;
}

interface Params extends ParsedUrlQuery {
  id: string
}

const ArticleDetail = ({post}: Post) => {
  const {body} = post;
  return (
    <div>
      {body}
    </div>
  )
}

export default ArticleDetail;

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const posts = await fetchAllBlogs();
  const paths = posts.map(({id}) => `/articles/${id}`)
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Post, Params> = async ({params}) => {
  const id:string = params!.id as string;
  const post = await fetchPostById(id);

  return {
    props: {post},
  }
}