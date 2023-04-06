import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context'


const Navbar = () => {

  const { state, dispatch } = useContext(ContextGlobal)
  const theme = state.theme


  const onClick = (e) => {
    const { checked } = e.target
    if (!checked)
      dispatch({ type: "light" });
    else
      dispatch({ type: "dark" });
  };

  return (
    <nav className={`navbar`}>
        <div className='navbar-nav'>
          <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`} to="/" end >Home</NavLink>
          <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`} to="/contacto">Contact</NavLink>
          <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`} to="/favs">Favs</NavLink>
        </div>

      <div style={{marginRight: 16}}>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
      <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked={theme} onChange={onClick} />
      </div>
    </nav>
  )
}

export default Navbar