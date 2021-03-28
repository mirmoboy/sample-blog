import AppHead from '../components/commons/AppHead'
import PostList from '../components/PostList'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()

  return {
    props: {
      posts
    }
  }
}

const Home = ({ posts }) => {
  return (
    <div className="container md:mx-auto max-w-screen-md">
      <AppHead title='Sample Blog' description='this is sample blog' />

      <PostList posts={posts} />
    </div>
  )
}

export default Home
