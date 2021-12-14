import { useParams, NavLink } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import Loading from '../components/Loading'

const Post = () => {
  const { id } = useParams()
  const { data, error, loading } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  )

  if (loading) {
    return <Loading />
  }

  if (error !== '') {
    return <h2>{error}</h2>
  }

  return (
    <div>
      <NavLink to="/blog">
        <svg
          className="bi bi-arrow-left-circle-fill mt-2"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
        </svg>
      </NavLink>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  )
}

export default Post
