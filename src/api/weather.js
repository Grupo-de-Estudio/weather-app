export const fetchCityWeather = async () => {
  const url =
    'https://api.openweathermap.org/data/2.5/weather?q=El Tigre&lang=es&appid=f639681261a87e68583de41ee2875356&units=metric'
  const resp = await fetch(url)
  const dataWeather = await resp.json()

  const dataArray = [dataWeather]

  const datos = dataArray.map((dato) => {
    return {
      icon: dato.weather[0].icon,
      ciudad: dato.name,
      descripcion: dato.weather[0].description,
      temp: dato.main.temp,
      max_temp: dato.main.max_temp,
      min_temp: dato.main.min_temp,
      sensacion_termica: dato.main.feels_like,
    }
  })

  console.log(dataArray)

  console.log(datos)
}
