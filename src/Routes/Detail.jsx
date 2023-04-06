import { useContext } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { ContextGlobal } from '../Components/utils/global.context'

const Detail = () => {

  const { id } = useParams()
  const { medicos } = useContext(ContextGlobal)
  const getMedicoById = () => {
    return medicos.find(medico => medico.id === parseInt(id))
  }
  const medicoId = getMedicoById()
  if (!medicoId) {
    return <Navigate to="/home" />
  }

  return (
    <div >
      <div >

        <h1>Detalle Dentista</h1>
          <div>
            <th><p scope="col">Nombre: </p><p>{medicoId.name}</p></th>
            <th><p scope="col">E-mail: </p><p>{medicoId.email}</p></th>
            <th><p scope="col">Teléfono: </p><p>{medicoId.phone}</p></th>
            <th><p scope="col">WebSite: </p><p>{medicoId.website}</p></th>
          </div>
      </div>
    </div>
  )
}

export default Detail