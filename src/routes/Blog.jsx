import { useSearchParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import Loading from '../components/Loading'
import NewPost from '../components/NewPost'

const Blog = () => {
  const { data, error, loading } = useFetch(
    'https://jsonplaceholder.typicode.com/posts'
  )

  let [searchParams, setSearchParams] = useSearchParams()

  const handleChange = (e) => {
    let filter = e.target.value
    if (filter) {
      setSearchParams({ filter })
    } else {
      setSearchParams({})
    }
  }

  if (loading) {
    return <Loading />
  }

  if (error !== '') {
    return <h2>{error}</h2>
  }

  return (
    <div>
      <h1>Blog</h1>
      <form className="d-flex mb-4">
        <input
          type="search"
          className="form-control me-2"
          aria-label="Search"
          placeholder="Search"
          value={searchParams.get('filter') || ''}
          onChange={handleChange}
        />
        <button className="btn btn-outline-dark" type="submit">
          Search
        </button>
      </form>
      {data
        .filter((e) => {
          let filter = searchParams.get('filter')
          if (!filter) return true

          let title = e.title.toLowerCase()
          return title.includes(filter.toLowerCase())
        })
        .map((e) => (
          <div key={e.id}>
            <div to={`/blog/${e.id}`}>
              <NewPost title={e.title} text={e.body} id={e.id} />
            </div>
          </div>
        ))}
    </div>
  )
}

export default Blog
