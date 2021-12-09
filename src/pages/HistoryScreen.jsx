import { getDocs, limit, orderBy, query, where } from '@firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useUserContext } from '../context/authContext'
import { colRef } from '../firebase/config'
import { Navbar } from './components/Navbar'
import { SearchHistory } from './components/SearchHistory'

export const HistoryScreen = ({ desloguear }) => {
  const { user } = useUserContext()
  const [bajados, setBajados] = useState([])

  const bajarDatos = getDocs(query(colRef, where('uid', '==', user.uid))).then(
    (snapshot) => {
      let datos = []
      snapshot.docs.forEach((doc) => {
        datos.push({ ...doc.data(), id: doc.id })
      })
      return datos
    }
  )

  const cargarDatosBajados = async () => {
    const datos = await bajarDatos
    setBajados(datos)
  }

  bajados.sort((a, b) => {
    if (a.orden > b.orden) {
      return -1
    }
  })

  useEffect(() => {
    cargarDatosBajados()
  }, [])

  return (
    <>
      <Navbar desloguear={desloguear} />
      <div className="history_content">
        {bajados.slice(0, 10).map((ciudad) => (
          <SearchHistory
            ciudad={ciudad.ciudad}
            key={ciudad.id}
            fecha={ciudad.fecha}
            anio={ciudad.anio}
            dia={ciudad.dia}
            hora={ciudad.hora}
            mes={ciudad.mes}
            minutos={ciudad.minutos}
            segundos={ciudad.segundos}
            uid={ciudad.uid}
          />
        ))}
      </div>
    </>
  )
}
