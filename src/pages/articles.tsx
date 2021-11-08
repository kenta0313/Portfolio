import { GetStaticProps } from "next"
import { useState } from "react";
import Post from "../components/blog/Post";
import { Blog, fetchAllBlogs } from "../lib/api"

interface Blogs {
  blogs: Blog[];
}

const Articles = ({blogs}: Blogs) => {
  //タグの配列作成
  const arrayTags = () => {
    const tags = blogs.map((blog) => {
      return blog.tag
    });
    const tags_sort = Array.from(new Set(tags)).sort();
    return ["すべて", ...tags_sort];
  }
  const tags = arrayTags();

  //タグでの絞り込み機能
  const [tag, setTag] = useState<string>("");

  const isFilter = (blog: Blog) => {
    if(!tag){
      return blog.tag === blog.tag;
    }else {
      return blog.tag === tag;
    }
  }
  const new_blogs = blogs.filter(isFilter);
  const tagFilter = (tag: string) => {
    if(tag === "すべて"){
      setTag("");
    }else {
      setTag(tag);
    }
  };

  return (
    <div>
      <div className="grid gap-2 grid-cols-10 mt-12">
        {tags.map((tag) => (
          <div key={tag}>
            <button onClick={() => tagFilter(tag)}>
              {tag}
            </button>
          </div>
        ))}
      </div>
      <ul className="grid gap-6 sm:grid-cols-2">
        {new_blogs && new_blogs.map((blog) => (
          <li key={blog.id}>
            <Post {...blog} />
          </li>
        ))}
      </ul>
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