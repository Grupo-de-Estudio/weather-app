import React, { useEffect } from 'react'
import { colRef } from '../../firebase/config'
import { getDocs, addDoc, deleteDoc } from 'firebase/firestore'
import { useUserContext } from '../../context/authContext'

export const SearchHistory = ({ ciudad, fecha }) => {
  const { user } = useUserContext()

  let anio = fecha.getFullYear()
  let diaNumero = fecha.getDate()
  let diaSemana = fecha.getDay()
  let mes = fecha.getMonth()

  if (mes == 0) mes = 'Enero'
  if (mes == 1) mes = 'Febrero'
  if (mes == 2) mes = 'Marzo'
  if (mes == 3) mes = 'Abril'
  if (mes == 4) mes = 'Mayo'
  if (mes == 5) mes = 'Junio'
  if (mes == 6) mes = 'Julio'
  if (mes == 7) mes = 'Agosto'
  if (mes == 8) mes = 'Septiembre'
  if (mes == 9) mes = 'Octubre'
  if (mes == 10) mes = 'Noviembre'
  if (mes == 11) mes = 'Diciembre'

  if (diaSemana == 0) diaSemana = 'Domingo'
  if (diaSemana == 1) diaSemana = 'Lunes'
  if (diaSemana == 2) diaSemana = 'Martes'
  if (diaSemana == 3) diaSemana = 'Miercoles'
  if (diaSemana == 4) diaSemana = 'Jueves'
  if (diaSemana == 5) diaSemana = 'Viernes'
  if (diaSemana == 6) diaSemana = 'Sabado'

  let hora = fecha.getHours()
  if (hora <= 9) hora = `0${hora}`

  let minutos = fecha.getMinutes()
  if (minutos <= 9) minutos = `0${minutos}`

  let segundos = fecha.getSeconds()
  if (segundos <= 9) segundos = `0${segundos}`

  let palabra = ciudad.trim()

  // Agregar documento
  const cargarHistorial = {
    ciudad: palabra,
    dia: diaSemana,
    fecha: diaNumero,
    mes: mes,
    anio: anio,
    hora: hora,
    minutos: minutos,
    segundos: segundos,
    uid: user.uid,
  }

  const agregarDatos = () => {
    addDoc(colRef, cargarHistorial)
  }

  // getDocs(colRef).where("uid","==",user.uid)
  //   .then((snapshot) => {
  //     let historial = []
  //     snapshot.docs.forEach((doc) => {
  //       historial.push({ ...doc.data(), id: doc.id })
  //     })
  //     console.log(historial)
  //   })
  //   .catch((err) => {
  //     console.log(err.message)
  //   })
  return (
    <div className="historys">
      <p className="bold">{`${palabra.charAt(0).toUpperCase()}${palabra.slice(
        1
      )}`}</p>
      <p>{`${diaSemana}, ${diaNumero} de ${mes} ${anio} (${hora}:${minutos}:${segundos}).`}</p>
    </div>
  )
}
