import Link from 'next/link'
import { Blog } from "../../lib/api"

const Post = ({id, title, tag, createdAt}: Blog) => {
  return (
    <div className="flex flex-col max-w-sm px-8 py-6 bg-white border border-gray-100 rounded-lg hover:bg-gray-50">
      <Link href={`/articles/${id}`} >
        <a>
          <div className="mt-4 text-base font-medium text-gray-700">
            {title}
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center justify-center">
              <div className="px-2 py-1 text-sm text-white bg-gray-600 rounded">
                {tag}
              </div>
            </div>
            <span className="text-sm font-light text-gray-600">
              {createdAt}
            </span>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default Post
