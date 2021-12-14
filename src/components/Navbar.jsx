import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <NavLink to="/" className="navbar-brand">
            Home
          </NavLink>
          <li className="nav-item">
            <NavLink to="/blog" className="nav-link">
              Blog
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
