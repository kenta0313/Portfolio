import Link from 'next/link'
import { Blog } from "../../lib/api"

const Post = ({id, title, tag}: Blog) => {
  return (
    <div className="border-b">
      <Link href={`/articles/${id}`} >
        <a>
          {title}
          {tag}
        </a>
      </Link>
    </div>
  )
}

export default Post
