export const fetchCityWeather = async () => {
  const url =
    'https://api.openweathermap.org/data/2.5/weather?q=El Tigre&lang=es&appid=f639681261a87e68583de41ee2875356&units=metric'
  const resp = await fetch(url)
  const data = await resp.json()

  console.log(data)
}
