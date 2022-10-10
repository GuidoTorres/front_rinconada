import { useContext } from 'react'
import { AdminContext } from '../../context/AdminContext'

function AdminHelper() {
    const {setRegistarUsuario,setDataToEdit} = useContext(AdminContext)

  return {setRegistarUsuario,setDataToEdit}
}

export default AdminHelper