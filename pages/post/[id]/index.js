import AppHead from '../../../components/commons/AppHead'
import { useRouter } from 'next/router'
import { cleanUrl, getIdFromCleanUrl } from '../../../public/utils/stringUtil'

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()

  const paths = data.map(({ id, title }) => ({
    params: { id: cleanUrl({ id, title }) }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const { id } = params
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${getIdFromCleanUrl(id)}`)
  const data = await res.json()

  return {
    props: { post: data }
  }
}

const post = ({ post: _post }) => {
  const router = useRouter()
  const { title, body } = _post

  const handleBack = () => {
    router.back()
  }

  return (
    <>
      <AppHead title={title} description={body} keyword={'blog,sample,sample blog'} />
      <div className='
        text-center flex justify-center flex-col mh-full max-w-screen-md
        px-5 pb-5 mx-auto
      '>
        <h1 className="antialiased text-xl md:text-3xl lg:text-4xl m-5 text-pink-600">
          {title}
        </h1>
        <img 
          src='/images/blog-large.jpeg'
          srcSet='
            /images/blog-small.jpg 500w,
            /images/blog-medium.jpg 1000w,
            /images/blog-large.jpeg 1500w
          '
          width='728'
          height='481'
          layout="responsive"
          loading='lazy'
          alt='SampleImage'
        />
        <p className="antialiased text-pink-400 text-sm md:text-xl mt-5">{body}</p>
        <div>
          <button className="bg-pink-400 hover:bg-pink-300 text-white py-2 px-4 mt-8 rounded " onClick={handleBack}>
            Back
          </button>
        </div>
      </div>
    </>
  )
}

export default post
