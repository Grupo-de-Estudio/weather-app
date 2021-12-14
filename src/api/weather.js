export const fetchCityWeather = async (ciudad) => {
  const lang = 'es'
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&lang=${lang}&appid=f639681261a87e68583de41ee2875356&units=metric`
  const resp = await fetch(url)
  if (resp.ok == false) {
    alert('ingrese una ciudad válida')
  } else {
    const dataWeather = await resp.json()
    return dataWeather
  }
}
