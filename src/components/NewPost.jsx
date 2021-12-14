import { Link } from 'react-router-dom'

const NewPost = ({ title, text, id }) => {
  return (
    <div className="card mb-2">
      <div className="card-body">
        <h5 className="card-title">
          <Link to={`/blog/${id}`}>{title}</Link>
        </h5>
        <p className="card-text text-secondary">{text}</p>
      </div>
    </div>
  )
}

export default NewPost
