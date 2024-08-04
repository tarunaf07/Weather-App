const get=async(location)=>{
  const cityName=document.getElementById('cityName')
  const stats=document.getElementById('stats')
  const url = `https://open-weather13.p.rapidapi.com/city/${location}/EN`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'd4c4d5f144mshbaa04409554bb4fp15fd6ajsn1949d2a0053f',
      'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    cityName.innerHTML=`<h2>${result.name}</h2>`
    const string=`<h3>Weather: ${result.weather[0].main}<br>Temp: ${result.main.temp}<br>Feels Like: ${result.main.feels_like}<br>Humidity: ${result.main.humidity}</h3>`
    
    stats.innerHTML=string;
    
  } catch (error) {
    console.error(error);
  }
}

const btn=document.getElementById('btn')

btn.onclick=()=>{
  const location=document.getElementById('inpt2')
  get(location.value);
}


