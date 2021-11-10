import React from 'react'
import { SingleCard } from '../pages/SingleCard'

export const fetchCityWeather = async (city) => {
  const lang = 'es'
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${lang}&appid=f639681261a87e68583de41ee2875356&units=metric`
  const resp = await fetch(url)
  const dataWeather = await resp.json()
  return dataWeather
}
