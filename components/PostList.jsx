import Link from 'next/link'
import { cleanUrl } from '../public/utils/stringUtil'

const PostList = ({ posts }) => (
  <div>
      <h1 className="antialiased text-2xl md:text-4xl text-center m-5 text-pink-600">Sample Blogs</h1>
      {
        posts.map(({ id, title, body }) => (
          <Link
            as={`/post/${cleanUrl({ id, title })}`} 
            href={`/post/${id}`}
            key={id}
          >
            <div
              className={`m-5 rounded-md p-4 cursor-pointer 
                bg-pink-100 hover:bg-pink-300 active:bg-pink-500 
                text-pink-600 hover:text-pink-700 active:text-pink-700
              `}
              key={id}
            >
              <h4 className='font-semibold text-md md:text-xl mb-2'>
                <a href={`/post/${cleanUrl({ id, title })}`}>{title}</a>  
              </h4>
              <p className='text-justify text-sm md:text-md'>{body}</p>
            </div>
          </Link>
        ))
      }
    </div>
)

export default PostList
