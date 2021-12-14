const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()

    e.target.reset()
  }

  return (
    <div className="mt-2">
      <h1>Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-dark">
          Send
        </button>
      </form>
    </div>
  )
}

export default Contact
