import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

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
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
        <div className='navbar-nav'>
          <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`} to="/" end >Home</NavLink>
          <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`} to="/contacto">Contact</NavLink>
          <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`} to="/favs">Favs</NavLink>
        </div>


      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <div style={{marginRight: 16}}>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
      <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked={theme} onChange={onClick} />
      </div>
    </nav>
  )
}

export default Navbar